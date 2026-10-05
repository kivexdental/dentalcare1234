import React, { useState, useEffect, useRef } from 'react';
import { Monitor, Tablet, Smartphone, Maximize2, X, ChevronDown, Check, Eye } from 'lucide-react';

/**
 * KIVEX Technology Website Preview Toolbar & Wrapper
 * 
 * Strict Skill Requirements Implemented:
 * 1. Permanent KIVEX Technology branding:
 *    - Toolbar Background: #F5EFE5 (permanent light cream)
 *    - KIVEX Blue: #2D5FC7 (bold, strong, uppercase)
 *    - Technology Accent: #E8B62A (warm yellow/gold, visually connected)
 *    - Sits directly on #F5EFE5 (NO separate background rectangle, badge, or pill)
 *    - Target website branding NEVER replaces KIVEX Technology.
 * 2. Device Modes:
 *    - PC (1280px actual viewport)
 *    - Tablet (768px actual viewport)
 *    - Phone (390px actual viewport)
 *    - Fullscreen (100% available viewport)
 * 3. Cross button:
 *    - '×' button hides the toolbar without modifying website styling or layout.
 *    - Floating KIVEX circular control allows reopening toolbar anytime.
 *    - 'Open targeted site in new tab' is completely REMOVED.
 * 4. True Viewport Architecture:
 *    - Iframe rendered with real physical pixel dimensions.
 *    - No fake transform: scale() distortion.
 * 5. Full WCAG 2.2 keyboard and accessibility support.
 */

export default function KivexPreviewWrapper() {
  const [deviceMode, setDeviceMode] = useState('pc'); // 'pc' | 'tablet' | 'phone' | 'fullscreen'
  const [toolbarVisible, setToolbarVisible] = useState(true);
  const [expandedMenuOpen, setExpandedMenuOpen] = useState(false);
  const iframeRef = useRef(null);

  // Construct iframe src with preview_embedded parameter to prevent nested wrapper loops
  const [iframeSrc, setIframeSrc] = useState('');

  useEffect(() => {
    const currentPath = window.location.pathname;
    const currentHash = window.location.hash || '';
    setIframeSrc(`${currentPath}?preview_embedded=1${currentHash}`);
  }, []);

  // Keyboard navigation for toolbar (ESC closes expanded dropdown or toolbar)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (expandedMenuOpen) {
          setExpandedMenuOpen(false);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [expandedMenuOpen]);

  const deviceConfigs = {
    pc: {
      id: 'pc',
      label: 'PC',
      width: '1280px',
      viewportDesc: '1280px Desktop Viewport',
      icon: Monitor
    },
    tablet: {
      id: 'tablet',
      label: 'Tablet',
      width: '768px',
      viewportDesc: '768px Tablet Viewport',
      icon: Tablet
    },
    phone: {
      id: 'phone',
      label: 'Phone',
      width: '390px',
      viewportDesc: '390px Mobile Viewport',
      icon: Smartphone
    },
    fullscreen: {
      id: 'fullscreen',
      label: 'Fullscreen',
      width: '100%',
      viewportDesc: '100% Fullscreen Viewport',
      icon: Maximize2
    }
  };

  const currentConfig = deviceConfigs[deviceMode];

  return (
    <div className="relative w-screen h-screen overflow-hidden flex flex-col bg-[#EFE9DF] select-none font-sans">
      {/* ================================================== */}
      {/* 1. KIVEX PREVIEW APPLICATION TOOLBAR                */}
      {/* ================================================== */}
      {toolbarVisible && (
        <header
          role="toolbar"
          aria-label="KIVEX Technology Website Preview Toolbar"
          style={{ backgroundColor: '#F5EFE5' }}
          className="relative z-50 w-full h-14 border-b border-[#E3DACB] px-4 sm:px-6 flex items-center justify-between shadow-sm transition-all duration-200"
        >
          {/* Permanent KIVEX Technology Logo Lockup */}
          {/* Sits DIRECTLY on #F5EFE5 toolbar background without any card, box, badge, or pill */}
          <div className="flex items-center gap-1.5 select-none" style={{ background: 'transparent' }}>
            <span
              className="font-extrabold text-lg sm:text-xl tracking-tight"
              style={{ color: '#2D5FC7', fontFamily: 'inherit' }}
            >
              KIVEX
            </span>
            <span
              className="font-bold text-xs sm:text-sm tracking-normal self-end mb-0.5"
              style={{ color: '#E8B62A', fontFamily: 'inherit' }}
            >
              Technology
            </span>
          </div>

          {/* Desktop & Tablet Device Controls */}
          <nav
            aria-label="Device Viewport Switcher"
            className="hidden md:flex items-center gap-1.5 p-1 rounded-xl bg-[#EBE3D7]/60 border border-[#DDD3C3]"
          >
            {Object.values(deviceConfigs).map((cfg) => {
              const Icon = cfg.icon;
              const isActive = deviceMode === cfg.id;

              return (
                <button
                  key={cfg.id}
                  onClick={() => setDeviceMode(cfg.id)}
                  aria-pressed={isActive}
                  aria-label={`Switch to ${cfg.label} mode (${cfg.viewportDesc})`}
                  className={`relative flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D5FC7] ${
                    isActive
                      ? 'bg-[#2D5FC7] text-white shadow-sm ring-1 ring-[#2D5FC7]'
                      : 'text-[#4A5568] hover:text-[#1A202C] hover:bg-[#E2D8C9]'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cfg.label}</span>
                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="w-1.5 h-1.5 rounded-full bg-[#E8B62A] ml-0.5"
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Mobile Collapsed Device Dropdown Trigger */}
          <div className="relative md:hidden">
            <button
              onClick={() => setExpandedMenuOpen(!expandedMenuOpen)}
              aria-expanded={expandedMenuOpen}
              aria-label="Select preview device mode"
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#EBE3D7] border border-[#DDD3C3] text-xs font-bold text-[#1A202C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D5FC7]"
            >
              <currentConfig.icon className="w-3.5 h-3.5 text-[#2D5FC7]" />
              <span>{currentConfig.label}</span>
              <ChevronDown className="w-3.5 h-3.5 text-[#666]" />
            </button>
          </div>

          {/* Right Controls: Viewport Info & Required Close (×) Button */}
          <div className="flex items-center gap-3">
            <span className="hidden lg:inline-block text-[11px] font-semibold text-[#718096] bg-[#EBE3D7]/70 px-2.5 py-1 rounded-md border border-[#DDD3C3]">
              {currentConfig.viewportDesc}
            </span>

            {/* Mandatory Cross Button: Hides toolbar */}
            <button
              onClick={() => setToolbarVisible(false)}
              aria-label="Close preview toolbar"
              title="Close toolbar and view website directly"
              className="p-1.5 rounded-lg text-[#5A6A85] hover:text-[#1A202C] hover:bg-[#E5DCCF] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D5FC7]"
            >
              <X className="w-5 h-5 stroke-[2.2]" />
            </button>
          </div>
        </header>
      )}

      {/* ================================================== */}
      {/* 2. DEVICE VIEW EXPANDED INTERFACE / DROPDOWN PANEL */}
      {/* Must also display KIVEX Technology branding and × */}
      {/* ================================================== */}
      {toolbarVisible && expandedMenuOpen && (
        <div
          role="region"
          aria-label="KIVEX Expanded Device Selector"
          style={{ backgroundColor: '#F5EFE5' }}
          className="md:hidden absolute top-14 left-0 right-0 z-50 border-b border-[#E3DACB] p-4 shadow-xl animate-in slide-in-from-top-2 duration-150"
        >
          {/* Expanded panel header with permanent KIVEX branding */}
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#E3DACB]">
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-base tracking-tight" style={{ color: '#2D5FC7' }}>
                KIVEX
              </span>
              <span className="font-bold text-xs tracking-normal" style={{ color: '#E8B62A' }}>
                Technology
              </span>
            </div>
            <button
              onClick={() => setExpandedMenuOpen(false)}
              aria-label="Close device menu"
              className="p-1 rounded text-[#5A6A85] hover:bg-[#E5DCCF]"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Device list */}
          <div className="grid grid-cols-2 gap-2">
            {Object.values(deviceConfigs).map((cfg) => {
              const Icon = cfg.icon;
              const isActive = deviceMode === cfg.id;

              return (
                <button
                  key={cfg.id}
                  onClick={() => {
                    setDeviceMode(cfg.id);
                    setExpandedMenuOpen(false);
                  }}
                  className={`flex items-center gap-2.5 p-2.5 rounded-xl text-xs font-bold transition-all text-left ${
                    isActive
                      ? 'bg-[#2D5FC7] text-white shadow-sm'
                      : 'bg-[#FAF6F0] text-[#2D3748] hover:bg-[#EBE3D7]'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <div className="flex-1">
                    <div>{cfg.label}</div>
                    <div className={`text-[10px] ${isActive ? 'text-blue-100' : 'text-slate-400'}`}>
                      {cfg.width}
                    </div>
                  </div>
                  {isActive && <Check className="w-3.5 h-3.5 text-[#E8B62A]" />}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* ================================================== */}
      {/* 3. PREVIEW WORKSPACE & ISOLATED VIEWPORT FRAME     */}
      {/* ================================================== */}
      <main className="relative flex-1 w-full h-full overflow-hidden flex items-center justify-center p-0 md:p-3">
        {deviceMode === 'fullscreen' || !toolbarVisible ? (
          /* Fullscreen & Closed Toolbar Mode: 100% natural responsive viewport */
          <div className="w-full h-full bg-white relative">
            {iframeSrc && (
              <iframe
                ref={iframeRef}
                src={iframeSrc}
                title="DentalCare Website Fullscreen Preview"
                className="w-full h-full border-0 block"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            )}
          </div>
        ) : (
          /* Device View Modes: PC (1280px), Tablet (768px), Phone (390px) */
          <div className="w-full h-full flex flex-col items-center justify-center overflow-auto p-2 sm:p-4">
            <div
              className={`relative flex flex-col bg-white transition-all duration-300 shadow-2xl overflow-hidden ${
                deviceMode === 'phone'
                  ? 'rounded-[44px] border-[10px] border-[#1F2937] ring-1 ring-slate-900/10'
                  : deviceMode === 'tablet'
                  ? 'rounded-[32px] border-[12px] border-[#2D3748] ring-1 ring-slate-900/10'
                  : 'rounded-2xl border border-slate-300 shadow-xl'
              }`}
              style={{
                width: currentConfig.width,
                maxWidth: '100%',
                height: deviceMode === 'phone' ? '820px' : deviceMode === 'tablet' ? '920px' : '100%',
                maxHeight: '100%'
              }}
            >
              {/* Device Hardware Top Header (Speaker & Camera notch for Phone, status header for PC/Tablet) */}
              {deviceMode === 'phone' && (
                <div className="w-full bg-[#1F2937] py-2 flex items-center justify-center relative select-none">
                  <div className="w-20 h-4 bg-black rounded-full flex items-center justify-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#1F2937]/90" />
                    <div className="w-1.5 h-1.5 rounded-full bg-[#111]" />
                  </div>
                </div>
              )}

              {deviceMode === 'tablet' && (
                <div className="w-full bg-[#2D3748] py-1.5 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#1A202C]" />
                </div>
              )}

              {deviceMode === 'pc' && (
                <div className="w-full bg-[#F1F5F9] border-b border-slate-200 px-4 py-2 flex items-center justify-between select-none">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-[#EF4444]" />
                    <span className="w-3 h-3 rounded-full bg-[#F59E0B]" />
                    <span className="w-3 h-3 rounded-full bg-[#10B981]" />
                  </div>
                  <div className="text-[11px] font-semibold text-slate-500 bg-white px-4 py-0.5 rounded-full border border-slate-200">
                    https://dentalcare-clinic.example.com
                  </div>
                  <div className="text-[11px] font-bold text-slate-400">
                    1280 × 900
                  </div>
                </div>
              )}

              {/* Real Viewport Iframe */}
              <div className="flex-1 w-full h-full relative overflow-hidden bg-white">
                {iframeSrc && (
                  <iframe
                    ref={iframeRef}
                    src={iframeSrc}
                    title={`DentalCare Website Preview - ${currentConfig.label}`}
                    style={{
                      width: '100%',
                      height: '100%',
                      border: 0,
                    }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  />
                )}
              </div>

              {/* Phone Bottom Home Bar */}
              {deviceMode === 'phone' && (
                <div className="w-full bg-[#1F2937] py-1.5 flex items-center justify-center">
                  <div className="w-28 h-1 bg-white/40 rounded-full" />
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      {/* ================================================== */}
      {/* 4. FLOATING REOPEN PREVIEW CONTROL                  */}
      {/* When toolbar is closed via ×, allows restoring it  */}
      {/* ================================================== */}
      {!toolbarVisible && (
        <aside
          aria-label="KIVEX Preview Application Controls"
          className="fixed bottom-5 right-5 z-50 animate-in fade-in zoom-in-90 duration-200"
        >
          <button
            onClick={() => setToolbarVisible(true)}
            aria-label="Reopen KIVEX Technology preview toolbar"
            title="Reopen KIVEX Technology preview toolbar"
            style={{ backgroundColor: '#F5EFE5', borderColor: '#E3DACB' }}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full border shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-105 active:scale-95 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D5FC7]"
          >
            <div className="w-6 h-6 rounded-full bg-[#2D5FC7] flex items-center justify-center text-white shadow-sm">
              <Eye className="w-3.5 h-3.5" />
            </div>
            <div className="flex items-center gap-1 select-none pr-1">
              <span className="font-extrabold text-xs" style={{ color: '#2D5FC7' }}>
                KIVEX
              </span>
              <span className="font-bold text-[10px]" style={{ color: '#E8B62A' }}>
                Preview
              </span>
            </div>
          </button>
        </aside>
      )}
    </div>
  );
}
