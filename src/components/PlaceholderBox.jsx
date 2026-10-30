export default function PlaceholderBox({
  label = 'Upload Your Photo Here (Standard iPhone Size)',
  helper,
  className = '',
  aspect,
  kind = 'phone',
  maxWidthClass,
}) {
  const computedAspect = aspect || (kind === 'certificate' ? '16/10' : '9/19.5')
  const computedMaxWidthClass =
    maxWidthClass ||
    (kind === 'certificate'
      ? 'max-w-[480px]'
      : 'max-w-[80%] sm:max-w-[240px]')

  return (
    <div
      className={
        'mx-auto w-full rounded-2xl border border-dashed border-white/15 bg-white/5 p-4 ' +
        computedMaxWidthClass +
        ' ' +
        className
      }
    >
      <div className="text-xs font-extrabold text-ink-100">{label}</div>
      {helper ? (
        <div className="mt-1 text-[11px] font-semibold text-ink-200/70">
          {helper}
        </div>
      ) : null}
      <div
        className="mt-3 w-full rounded-2xl border border-white/10 bg-base-900/60 shadow-[0_18px_55px_rgba(0,0,0,.55)]"
        style={{ aspectRatio: computedAspect }}
      />
    </div>
  )
}
