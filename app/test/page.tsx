'use client'

import React from 'react'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import { Image as AntdImage} from 'antd';

const images = ['screenshots/916ca699ab6f2828.png', 'screenshots/ffxiv_01102023_004658_256.png', 'screenshots/ffxiv_02152023_230850_737.png', 'screenshots/ffxiv_02222023_230346_005.png', 'screenshots/ffxiv_03012023_185330_058.png', 'screenshots/ffxiv_03012023_185502_278.png', 'screenshots/ffxiv_03012023_185508_993.png', 'screenshots/ffxiv_06302022_202109_599.png', 'screenshots/ffxiv_06302022_202113_119.png', 'screenshots/ffxiv_06302022_202117_765.png', 'screenshots/ffxiv_06302022_202124_492.png', 'screenshots/ffxiv_06302022_202126_696.png', 'screenshots/ffxiv_06302022_202133_950.png', 'screenshots/ffxiv_06302022_202205_963.png', 'screenshots/ffxiv_07172022_225013_601.png', 'screenshots/ffxiv_07172022_225023_998.png', 'screenshots/ffxiv_07172022_225253_207.png', 'screenshots/ffxiv_08052022_014730_491.png', 'screenshots/ffxiv_08062022_235612_715.png', 'screenshots/ffxiv_08062022_235617_604.png', 'screenshots/ffxiv_08072022_000033_794.png', 'screenshots/ffxiv_08072022_000045_062.png', 'screenshots/ffxiv_08072022_000243_581.png', 'screenshots/ffxiv_08072022_000332_349.png', 'screenshots/ffxiv_08072022_001938_343.png', 'screenshots/ffxiv_08072022_001949_398.png', 'screenshots/ffxiv_08092022_085140_596.png', 'screenshots/ffxiv_08232022_035809_404.png', 'screenshots/ffxiv_08232022_095145_845.png', 'screenshots/ffxiv_09032022_152111_739.png', 'screenshots/ffxiv_09032022_202518_802.png', 'screenshots/ffxiv_09062022_140011_523.png', 'screenshots/ffxiv_09182022_020457_993.png', 'screenshots/ffxiv_09222022_053031_028.png', 'screenshots/ffxiv_09222022_053048_430.png', 'screenshots/ffxiv_10242022_205749_620.png', 'screenshots/ffxiv_10242022_205750_616.png', 'screenshots/ffxiv_20230302_004614_295.png', 'screenshots/ffxiv_20230302_004630_782.png', 'screenshots/ffxiv_20230302_004637_878.png', 'screenshots/ffxiv_20230302_004656_406.png', 'screenshots/ffxiv_20230302_004704_163.png', 'screenshots/ffxiv_20230302_004717_761.png', 'screenshots/ffxiv_20230302_004721_046.png', 'screenshots/ffxiv_20230302_004728_602.png', 'screenshots/ffxiv_20230302_004737_289.png', 'screenshots/ffxiv_20230302_004742_156.png', 'screenshots/ffxiv_20230302_004847_247.png', 'screenshots/ffxiv_20230302_004852_547.png', 'screenshots/ffxiv_20230302_004855_832.png', 'screenshots/ffxiv_20230302_004903_957.png', 'screenshots/ffxiv_20230302_004908_478.png', 'screenshots/ffxiv_20230302_004913_678.png', 'screenshots/ffxiv_20230302_004921_263.png', 'screenshots/ffxiv_20230302_005159_731.png', 'screenshots/ffxiv_20230302_005207_661.png', 'screenshots/ffxiv_20230302_005211_785.png', 'screenshots/ffxiv_20230302_005242_744.png', 'screenshots/ffxiv_20230302_005255_682.png', 'screenshots/ffxiv_20230302_005319_293.png', 'screenshots/ffxiv_20230302_005328_801.png', 'screenshots/ffxiv_20230302_005519_823.png', 'screenshots/ffxiv_dx11_2023-03-05_17-25-37.png', 'screenshots/ffxiv_dx11_2023-03-05_17-28-42.png', 'screenshots/ffxiv_dx11_2023-03-05_17-29-32.png', 'screenshots/ffxiv_dx11_2023-03-05_17-40-48.png', 'screenshots/ffxiv_dx11_2023-03-05_17-43-08.png', 'screenshots/ffxiv_dx11_2023-03-05_18-03-27.png', 'screenshots/ffxiv_dx11_2023-03-05_18-03-53.png', 'screenshots/image (2).png', 'screenshots/image.png']



export default function page() {
  return (
    <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
            >
    <Masonry
    breakpointCols={3}
    className="my-masonry-grid"
    columnClassName="my-masonry-grid_column"
    columnsCount={3} gutter="10px">
        {images.map((image, i) => (                 
                        <AntdImage
                            key={i}
                            src={image}
                            style={{width: "100%", display: "block"}}
                            alt=""
                        />
                    ))}
    </Masonry>
    </ResponsiveMasonry>
  )
}
