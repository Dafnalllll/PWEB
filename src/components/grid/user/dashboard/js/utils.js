export function formatDate(d) {
  try {
    return new Date(d).toLocaleDateString();
  } catch {
    return d ?? "";
  }
}
