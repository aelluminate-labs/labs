import * as RemixIcons from '@remixicon/react';

export function getIconByName(iconName: keyof typeof RemixIcons) {
  return RemixIcons[iconName] || RemixIcons.RiQuestionLine;
}