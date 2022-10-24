export const ONE_MB = 1024;

export const megaBytesToBytes = (MB: number) => {
  return MB * ONE_MB * ONE_MB;
};

export const downloadFile = (link: string, filename = '') => {
  if (link) {
    const tempLink = document?.createElement('a');

    tempLink.style.display = 'none';
    tempLink.href = link;
    tempLink.setAttribute('download', filename);
    tempLink.setAttribute('target', '_blank');

    document?.body.appendChild(tempLink);

    tempLink.click();

    document?.body.removeChild(tempLink);
    window?.URL.revokeObjectURL(link);
  }
};

export const exportJsonFile = (obj: unknown, filename = 'object.json') => {
  downloadFile(
    `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(obj))}`,
    filename,
  );
};
