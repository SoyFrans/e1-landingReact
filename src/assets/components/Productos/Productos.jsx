import {ProductsContainer,TitleProduct } from "./ProdStyle"
import CardProduct from "../ExternalComponents/CardProduct"

function Productos() {
    return (
        <div>
            <TitleProduct> 👾 Nuestros Juegos 👾 </TitleProduct>
            <ProductsContainer>
                <CardProduct cardImg={"https://nextgames.com.ar/img/Public/1040/4281-producto-81qsm5cnn5l-ac-sl1500.jpg"} cardTitle="Dragon Ball: Sparking! Zero" cardButton="Comprar" cardPrice={65000} />
                <CardProduct cardImg={"https://media.vandal.net/m/86450/horizon-2-forbidden-west-20201124144437_1.jpg"} cardTitle="Horizon Forbidden West" cardButton="Comprar" cardPrice={43000} />
                <CardProduct cardImg={"https://nextgames.com.ar/img/Public/1040/69374-producto-716wdmhjyll-sl1500.jpg"} cardTitle="The Las Of Us Part 1" cardButton="Comprar" cardPrice={71000} />
                <CardProduct cardImg={"https://m.media-amazon.com/images/I/71GFQpKTRYL._AC_UF1000,1000_QL80_.jpg"} cardTitle="FIFA 23" cardButton="Comprar" cardPrice={85000} />
                <CardProduct cardImg={"https://m.media-amazon.com/images/I/81em1nszXNS._AC_UF1000,1000_QL80_.jpg"} cardTitle="Ghosts of Tushima" cardButton="Comprar" cardPrice={49000} />
                <CardProduct cardImg={"https://acdn.mitiendanube.com/stores/427/682/products/street-fighter-6-ps5-06212800734af69f4217002286831610-1024-1024.jpg"} cardTitle="Street Fighter 6" cardButton="Comprar" cardPrice={66000} />
                <CardProduct cardImg={"https://nextgames.com.ar/img/Public/1040/51311-producto-metro-exodus-complete-ps5.jpg"} cardTitle="Metro Exodus" cardButton="Comprar" cardPrice={48000} /> 
                <CardProduct cardImg={"https://nextgames.com.ar/img/Public/1040/92325-producto-6548130-sd.jpg"} cardTitle="Avatar Frontiers of Pandora" cardButton="Comprar" cardPrice={59000} />
                <CardProduct cardImg={"https://nextgames.com.ar/img/Public/1040/48281-producto-astro-bot.jpg"} cardTitle="Astro Bot" cardButton="Comprar" cardPrice={25000} />
                <CardProduct cardImg={"https://nextgames.com.ar/img/Public/1040/67314-producto-ac-shadows-ps5.jpg"} cardTitle="Assasin's Creed Shadows" cardButton="Comprar" cardPrice={71000} />
                <CardProduct cardImg={"https://nextgames.com.ar/img/Public/1040/32125-producto-untitled.jpg"} cardTitle="Resident Evil 4 Gold Edition" cardButton="Comprar" cardPrice={63000} />
                <CardProduct cardImg={"https://nextgames.com.ar/img/Public/1040/18718-producto-image002.jpg"} cardTitle="Star Wars Outlaws" cardButton="Comprar" cardPrice={61000} />     
            </ProductsContainer>
        </div>
    )
}
export default Productos
