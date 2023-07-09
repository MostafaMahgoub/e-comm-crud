import Box from '@mui/material/Box';
import path1 from '../Homepage/assets/Path-1.png'
import path2 from '../Homepage/assets/Path-2.png'
import pathOutline from '../Homepage/assets/Path-outline.png'

interface Props {
  backgrounds: string[];
}

function StackedBackground({ backgrounds }: Props) {
    return (
      <Box
        position="absolute"
        width="100%"
        height="100%"
        right= "-20%"
        top= "0%"
        sx={{ zIndex: 0 }}
      >
        {backgrounds.map((background, index) => (
          <Box
            key={index}
            position="absolute"
            top={index === 0 ? "-40px" : index === 1 ? "0px" :"-102px"}
            left={index === 0 ? "362.06px" : index === 1 ? "430px" : "113px"}
            width={index === 0 ? "1273.94px" : index === 1 ? "1212px" : "1326.51px"}
            height={index === 0 ? "1125px" : index === 1 ? "1102px" : "1206.09px"}
            style={{
              backgroundImage: `url(${background})`,
            //   backgroundPosition: index === 1 ? 'none' : 'center',
              backgroundSize: 'cover',
              zIndex: backgrounds.length - index,
              transform: index === 0 ? "rotate(-1.27deg)" : index === 2 ? "rotate(-2.27deg)" : "none",
            }}
          />
        ))}
      </Box>
    );
}

function BackgroundPaths() {
    const backgrounds = [pathOutline, path2, path1];

  return <StackedBackground backgrounds={backgrounds} />;
}

export default BackgroundPaths;