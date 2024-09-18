import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import React, { useState } from 'react';
import RecipeDetail from './components/Recipes/RecipeDetail';
import RecipeList from './components/Recipes/RecipeList';
//نمایان کردن فایل style
import './App.css';
import { ThemeProvider } from './Theme';
import HandleTheme from './HandleTheme';
import About from './components/About/About'; // مسیر به فایل About.js
import copyToClipboard from './components/About/copy';
import Header from './components/Header/Header'; // Adjust path as needed
import Search from './components/Searching/Search'; //Search components React 
import Footer from './components/Footer/Footer';
import Contact from './components/contact/contact';
import Info from './components/Login/info';
import Menu from './components/Menu-system/menu';
import Cart from './components/Menu-system/Cart';


 //Theme   
<ThemeProvider>
    <HandleTheme></HandleTheme>
</ThemeProvider>
    



// const App = () => {
//     const [selectedRecipe, setSelectedRecipe] = useState(null);
 
    
//     const handleRecipeSelect = (recipe) => {
//         setSelectedRecipe(recipe);
//     };

const App = () => {
    const [selectedRecipe, setSelectedRecipe] = useState(null);
    const [searchQuery, setSearchQuery] = useState(''); // ذخیره جستجو

    const handleRecipeSelect = (recipe) => {
        setSelectedRecipe(recipe);
    };

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    // فیلتر کردن بر اساس جستجو با نرمال‌سازی فارسی
    const filteredRecipes = recipes.filter(recipe =>
        recipe.title.normalize('NFKD').toLowerCase().includes(searchQuery.normalize('NFKD').toLowerCase())
    );
    return (
       
        <Router>
            <div className="app-container">
          
            
                <Header />
                <Search onSearch={handleSearch} />
                <Routes>
                    <Route path="/" element={
                        <>
                            {/* <h1 style={{fontSize: '15px', margin: '25px'}} className='app-title'>*Online Recipes*</h1> */}
                            <RecipeList recipes={filteredRecipes} onSelectRecipe={handleRecipeSelect} />
                            {selectedRecipe && <RecipeDetail recipe={selectedRecipe} />}
                        </>
                    } />
                    <Route path="/about" element={<About />} />
                    <Route path= "/contact"  element={<Contact />}/>
                    <Route path= "/footer" element={<Footer />} />
                    <Route path="/menu" element={<Menu />}/>
                    <Route path="/cart" element={<Cart />}/>
                    <Route path='/info' element={<Info />}/>
                    {/* Add more routes here */}
                    
                
                </Routes>
                
            </div>
        </Router>

    );
};

const recipes = [
    {
        id: 1,
        title: 'پاستا الفردو',
        description: 'پاستا با سس  الفردو اگر مواد بالا را آماده کردید، می‌توانید مراحل زیر را دنبال کنید تا خوشمزه‌ترین پاستا آلفردو را در خانه درست کنید:',
        ingredients: ['پاستا: 400 گرم', 'خامه: یک پیمانه', 'شیر: 1 لیوان', 'سینه مرغ: 1 عدد', 'جعفری: یک دسته', 'قارچ: 400 گرم' , 'نمک و فلفل و آویشن: به میزان کافی', 'آرد: یک قاشق غذاخوری', 'روغن زیتون: به مقدار لازم'],
        instructions: 'برای درست کردن این غذا با مرغ، ابتدا قارچ‌ها را به خوبی بشویید و آبکشی کرده و و سپس آنها را خرد کنید. | در مرحله بعد، باید سراغ حبه‌های سیر بروید و آنها را نیز به خوبی خرد کرده و در بشقاب قارچ‌ها بریزید. | سینه مرغ را به خوبی بشویید و بعد از خارج کردن استخوان آن، کمی سرکه روی آن به همراه فلفل سیاه و نمک اضافه کنید تا به خوبی مزه‌دار شود. | در ظرف دیگری پاستا را ریخته و اجازه بدهید به خوبی در آب جوش نرم شوند. |  قارچ‌های خردشده را به همراه روغن زیتون و سیر تفت دهید و سپس شیر را به آن اضافه کنید تا به جوش بیاید. | کمی آرد و سه قاشق غذاخوری شیر سرد را به محتوای قارچ خود اضافه کنید و بعد از دو دقیقه خامه را نیز به آن بیفزایید. | بعد از ۵ دقیقه شعله را کم کنید و کمی جعفری به سس خود اضافه نمایید. | پاستاهای نرم‌شده را به سس آلفردو اضافه کنید و با مرغ ترکیب کرده و خوب هم بزنید تا یکدست شود. | پس از اینکه پاستا به خوبی با سس ترکیب شد، بگذارید کمی گرم شود سپس در بشقابی دیگر غذای خود را سرو کنید و از آن لذت ببرید!',
        image: '/Image/Alferedo.jpg' //path to image
    },

    {
        id: 2,
        title: 'پاستا کاپلینی',
        description: 'پیتزای کاپلینی یک پیتزای کلاسیک ایتالیایی است که معمولاً با مواد تازه و ساده تهیه می‌شود. در زیر دستور پخت این پیتزا را برای شما آورده‌ام:',
        ingredients: ['اورگانو یا آویشن خشک برای طعم‌دهی' ,'قارچ خرد شده (اختیاری)' ,'فلفل دلمه‌ای رنگی، نازک خرد شده' ,'چند عدد زیتون سیاه بدون هسته' ,'۱۰۰ گرم ژامبون یا سالامی' ,'۵۰ گرم پنیر پارمزان، رنده شده' ,'۱۵۰ گرم پنیر موتزارلا، رنده شده' ,'چند برگ ریحان تازه، خرد شده' ,'۱ قاشق چای‌خوری شکر (اختیاری)' ,'نمک و فلفل به مقدار لازم' ,'۲ قاشق غذاخوری روغن زیتون' ,'۲ حبه سیر، خرد شده' ,'۲ عدد گوجه‌فرنگی بزرگ، پوست کنده و خرد شده' ,'۱ قاشق غذاخوری روغن زیتون' ,'۱۵۰ میلی‌لیتر آب گرم' ,'۷ گرم مخمر خشک', '۱ قاشق چای‌خوری شکر', '۱ قاشق چای‌خوری نمک', '۲۵۰ گرم آرد گندم'],
        
        instructions: 'در یک کاسه بزرگ، مخمر، شکر و آب گرم را با هم مخلوط کنید و به مدت ۱۰ دقیقه کنار بگذارید تا مخمر فعال شود. | آرد و نمک را در کاسه‌ای جداگانه مخلوط کنید. سپس مخلوط مخمر را به آرد اضافه کنید و با دست یا قاشق چوبی شروع به مخلوط کردن کنید. | روغن زیتون را اضافه کرده و خمیر را به مدت ۱۰ دقیقه ورز دهید تا نرم و یکدست شود. | خمیر را به شکل توپ درآورده و در یک کاسه چرب شده قرار دهید. روی آن را با پارچه بپوشانید و به مدت ۱ ساعت در جای گرم قرار دهید تا حجم آن دو برابر شود. | در یک تابه، روغن زیتون را گرم کنید و سیر خرد شده را اضافه کنید. آن را به مدت ۱ دقیقه تفت دهید تا معطر شود. | گوجه‌فرنگی‌های خرد شده را اضافه کنید و به مدت ۱۰-۱۵ دقیقه روی حرارت متوسط بپزید تا غلیظ شود. | در پایان، نمک، فلفل، شکر (اختیاری) و ریحان تازه را اضافه کنید. سپس تابه را از روی حرارت بردارید و سس را کنار بگذارید. | فر را به دمای ۲۲۰ درجه سانتی‌گراد (۴۲۵ درجه فارنهایت) گرم کنید. | خمیر پف کرده را به سطحی که آرد پاشیده‌اید منتقل کنید و آن را با دست یا وردنه به ضخامت دلخواه باز کنید. |خمیر باز شده را به سینی فر منتقل کنید. | سس گوجه‌فرنگی را روی خمیر پخش کنید. | پنیر موتزارلا و پارمزان را روی سس بپاشید. | ژامبون یا سالامی، زیتون، فلفل دلمه‌ای و قارچ را روی پنیرها قرار دهید. | کمی اورگانو یا آویشن خشک روی مواد پاشیده و پیتزا را به مدت ۱۵-۲۰ دقیقه در فر قرار دهید تا لبه‌های خمیر طلایی و پنیر کاملاً ذوب و طلایی شود. | پیتزا را از فر خارج کرده و بلافاصله سرو کنید. | نوش جان!',
        image: '/Image/Capellini.jpg'
    },

    {
        id: 3,
        title: 'پیتزا مارگاریتا',
        description: 'پیتزا با گوجه فرنگی تازه و ریحان | در میان انواع پیتزا‌هایی که در دنیا وجود دارد، مارگاریتا یکی از پرطرف‌دارترین‌ها در سفارش آنلاین غذاست. پیتزایی با سبک ایتالیایی که طعم فوق‌العاده‌ای داشته و البته به دلیل طعم غالب گوجه‌فرنگی به پیتزای گوجه‌فرنگی نیز معروف است. اگر علاقه‌مند به تهیه این مدل از پیتزا در منزل هستید، این مطلب به‌صورت مرحله‌به‌مرحله آموزش آن را در اختیارتان قرار خواهد داد.',
        ingredients: ['خمیر پیتزا آماده', 'گوجه فرنگی', 'پنیر پیتزا', 'ریحان' , 'سیر', 'نمک، فلفل سیاه و آویشن', 'روغن زیتون'],
        instructions: 'اولین مرحله برای تهیه این مدل پیتزا، تهیه ترکیبات موردنیاز است. باید گوجه‌ها را بشویید و سپس پوست آن‌ها را جدا کنید. پس از آن نیز آن‌ها را به‌صورت نگین‌های ریز خرد کنید. | مرحله دوم مربوط به آماده‌سازی سیر است. ابتدا حبه‌های سیر را بشویید، سپس پوست آن‌ها را جدا کرده و در نهایت نیز با استفاده از یک رنده ریز آن را رنده کنید. |  در مرحله سوم باید ریحان را بشویید. سپس با قرار دادنشان درون آبکش، اجازه دهید تا آب اضافی از آن خارج شود. پس از خشک‌شدن نسبی ریحان‌ها آن را درون تابه بریزید و با حرارت ملایم کمی تفت دهید تا برای پخت پیتزا آماده شود. |  در این مرحله تمامی ترکیبات شما آماده است. درون یک تابه، کمی روغن بریزید و سیری که رنده کرده‌اید را به آن اضافه کنید. با تفت‌دادن سیر، رنگ آن طلایی خواهد شد. گوجه‌فرنگی رنده یا خرد شده را به این ترکیب در داخل تابه اضافه کنید و آن را برای دقایقی تفت دهید. | اکنون نوبت به اضافه‌کردن نمک و فلفل می‌رسد. در این پیتزا بهتر است از فلفل سیاه استفاده کنید. تفت‌دادن ترکیبات را ادامه داده و اجازه دهید تا آب درون گوجه‌فرنگی تبخیر شود. نزدیک به ¾ از ریحان را به این گوجه‌فرنگی اضافه کنید. اجازه دهید این گوجه‌فرنگی برای مدت یک دقیقه روی حرارت باقی بماند. | اکنون باید فر را روشن کنید. دمای ۲۷۵ درجه برای گرم و آماده‌شدن فر کافی است. | خمیر پیتزا را روی سینی فر قرار دهید و سپس سسی که تهیه کرده‌اید را روی آن پخش کنید. این کار را با دقت انجام دهید و با پشت قاشق، تمام قسمت‌های سس را به این سس آغشته کنید. سپس این خمیر را درون فر قرار دهید تا برای ۱۵ دقیقه کمی نیمه‌پخته شود. |  پس از گذشت زمان موردنظر، باید پیتزا را از درون فر خارج کنید. سپس، نوبت به اضافه‌کردن پنیر پیتزا می‌رسد. تمام قسمت‌های خمیری که اکنون به سس آغشته و کمی نیمه‌پخته است را باید با پنیر بپوشانید. از برگ ریحان نیز برای قسمت‌های مختلف پیتزای خود و تزئین آن استفاده کنید. چند عدد گوجه‌فرنگی را به‌صورت حلقه‌حلقه برش دهید و روی پیتزا بچینید. | اکنون نوبت به پخت اصلی پیتزا می‌رسد. باید برای مدت‌زمان ۱۵ دقیقه اجازه دهید تا پیتزای شما درون فر باقی‌مانده و کاملا بپزد. حتما چک کنید که پنیر پیتزا به طور کامل آب شود. | پس از پخت کامل پیتزا، شعله زیری فر را خاموش و برای مدت‌زمان ۲ دقیقه گریل آن را روشن کنید. با این کار پنیری که روی پیتزا ریخته‌اید، کمی طلایی شده و رنگ بهتری را به خود می‌گیرد. |  اکنون پیتزای شما آماده بوده و می‌توانید آن را از فر خارج کنید.',
        image: '/Image/pitza-margarita.jpg'
    },

    {
        id: 4,
        title: 'پیتزای ایتالیایی',
        description: 'پیتزای ایتالیایی بسیار غذای کلاسیک  و لذیذ | پیتزا یکی از غذاهای سنتی ایتالیایی است که از یک لایه خمیر یا نان و رویه پیتزا تشکیل شده است. پیتزای سنتی ایتالیایی تنها با سس گوجه و پنیر پیتزا تهیه می شده است که به مرور مواد مختلفی روی آن قرار داده و آن را تغییر دادند. در این دستور طرز تهیه پیتزا ایتالیایی با مرغ و بیکن بیان شده است. برای مشاهده آموزش کامل و مرحله به مرحله طرز تهیه پیتزا ایتالیایی در ادامه با سایت اموزشی چی شی همراه باشید. ',
        //طرز تهیهه
        ingredients: ['خمیر پیتزا', 'گوجه فرنگی', '(پنیر)پنیر موزارلا', 'پیاز'],
        instructions: 'برای تهیه پیتزای خوشمزه ایتالیایی در ابتدای کار، به تهیه خمیر می پردازیم. برای این کار، نصف مقدار آب ولرم را با مایه خمیر و شکر مخلوط کرده و روی ظرف را می پوشانیم تا به عمل آید. حالا وسط آرد را گود کرده و خمیر مایه را وسط آن می ریزیم.نمک را هم اضافه کرده و مخلوط می کنیم. مابقی آب را کم کم اضافه کرده و مخلوط می کنیم تا یک خمیر لطیف و کمی چسبنده بدست آید. حتی ممکن است مجدد نیاز به آب داشته باشد که میزان آب بستگی به آرد دارد.حالا روغن زیتون را اضافه کرده و برای یک ربع ساعت ورز می دهیم تا کاملا نرم و لطیف و یکدست شود. روی خمیر را پوشانده و پنج ساعت استراحت می دهیم. مرغ ها را به صورت مکعبی در سایز کوچک خرد کرده و در تابه با سیر و ادویه ها و روغن زیتون تفت می دهیم.در این مرحله سس پیتزا هم تهیه می کنیم. برای این کار، سیر را رنده کرده و با کمی روغن زیتون درون تابه تفت می دهیم. گوجه ها را شسته و پوره می کنیم. به مخلوط سیر، فلفل سیاه و پاپریکا اضافه کرده و کمی تفت می دهیم تا بوی آن خارج شود.پوره گوجه را به آن اضافه کرده و تفت می دهیم. درب تابه را نیمه می بندیم تا آب گوجه جمع شود. سس پیتزا آماده است. بعد از این که خمیر استراحت کرد، آن را به دو قسمت تقسیم می کنیم. سپس آن را داخل ظرف مخصوص پیتزا یا سینی فر پهن می کنیم.سس را روی خمیر می مالیم. پنیر موزارلا، مرغ، زیتون سیاه خرد شده و پیاز حلقه ای را روی خمیر می ریزیم. سپس فر را تا دمای ۲۵۰ درجه سانتی گراد گرم می کنیم. پیتزا را درون فر گذاشته و دما را به ۲۰۰ درجه سانتی گراد کاهش می دهیم.در مرحله پایانی تقریبا ۲۰ تا ۲۵ دقیقه زمان می دهیم تا پیتزا کامل بپزد. در دو سه دقیقه آخر می توان بیکن هم روی پیتزا گذاشت. وقتی که نان رنگ گرفت و لایه رویی پیتزا طلایی شد، پیتزا را از فر خارج کرده و سرو می کنیم.',
        image:'/Image/Italy.jpg'
    },
    {
        id: 5,
        title: 'کباب کوبیده',
        description: 'کباب کوبیده:گوشت قلوه‌گاه گوسفند را همراه با گوشت گوساله چرخ می‌کنند. گوشت چرخ شده را مجدد چرخ می‌کنند تا به صورت خمیر درآید. خمیر گوشت را با پیاز رنده شده و نمک مخلوط می‌کنند. به سیخ می‌کشند و روی ذغال کباب می‌کنند.',
        //طرز تهیهه
        ingredients: [
            "500 گرم گوشت چرخ‌کرده (گوسفند یا گوساله)",
            "100 گرم چربی گوسفند (اختیاری)",
            "1 عدد پیاز بزرگ (رنده شده و آب‌گیری شده)",
            "1 قاشق چای‌خوری زردچوبه",
            "1 قاشق چای‌خوری نمک",
            "1 قاشق چای‌خوری فلفل سیاه",
            "1 قاشق غذاخوری زعفران دم‌کرده (اختیاری)",
            "1 قاشق غذاخوری رب گوجه‌فرنگی (اختیاری)",
            "1 قاشق غذاخوری ادویه مخصوص کباب (اختیاری)"
        ],
        instructions: `
        1. آماده‌سازی گوشت: گوشت قرمز(بهتر است در ناحیه قلوه گاه قرار داشته  باشد برای آماده سازی)  را به قطعات کوچک برش بزنید و چرخ کنید تا نرم و یکنواخت شود.
        2. اضافه کردن پیاز: پیاز را رنده کرده و آب آن را بگیرید.
        3. مخلوط کردن مواد: در یک کاسه بزرگ، گوشت چرخ‌شده، پیاز رنده شده، نمک، فلفل سیاه، زردچوبه و زعفران دم‌کرده را با هم مخلوط کنید. می‌توانید کمی روغن مایع هم اضافه کنید.
        4. استراحت دادن به مخلوط: مخلوط را به مدت ۳۰ دقیقه در یخچال قرار دهید.
        5. سیخ زدن: مقداری از مخلوط را بردارید و به سیخ بکشید.
        6. کباب کردن: سیخ‌ها را روی ذغال داغ قرار دهید و هر طرف را به مدت ۵ تا ۷ دقیقه کباب کنید.
        7. سرو: پس از پخت، کباب‌ها را با برنج یا نان تازه سرو کنید و می‌توانید با ترشی یا سالاد شیرازی تزئین کنید.
        
        `,
        image:'/Image/Koobideh.jpg'   
    },

    {
        id: 6,
        title: 'جوجه کباب',
        description: 'کوبیده مرغ: این غذا با استفاده از گوشت مرغ چرخ کرده تهیه می‌شود. مرغ چرخ شده را با پیاز رنده شده و ادویه‌های مختلف مخلوط کرده و سپس به سیخ می‌کشند و روی ذغال کباب می‌کنند.',
        ingredients: [
            '۵۰۰ گرم گوشت سینه مرغ (چرخ شده)',
            '۱ عدد پیاز بزرگ (رنده شده)',
            '۱ قاشق چای‌خوری نمک',
            '۱ قاشق چای‌خوری فلفل سیاه',
            '۱ قاشق چای‌خوری زعفران دم‌کرده',
            '۱ قاشق غذاخوری روغن مایع (برای جلوگیری از چسبندگی)',
            '۱ قاشق چای‌خوری زردچوبه',
            'سیخ کباب (چوبی یا فلزی)',
            'فلفل دلمه‌ای و گوجه‌فرنگی (برای کباب کردن در کنار کوبیده، اختیاری)'
        ],
        instructions: 'ابتدا گوشت مرغ را چرخ کنید و آن را در یک کاسه بزرگ بریزید. سپس پیاز رنده شده، نمک، فلفل سیاه و زعفران را به آن اضافه کنید. مواد را خوب مخلوط کنید تا یکدست شود. سپس مقدار مناسبی از مخلوط را بردارید و به سیخ بکشید. سیخ‌ها را روی ذغال داغ قرار دهید و هر طرف را به مدت ۵ تا ۷ دقیقه کباب کنید تا کاملاً پخته و طلایی شوند. می‌توانید کوبیده مرغ را با برنج یا نان سرو کنید.',

        image: '/Image/koubide-morgh.jpg'
    },


    {
        id: 7,
        title: 'کوکوی گوشت',
        description: 'کوکوی گوشت یک نوع کوکوی بسیار خوشمزه و متنوع است که دستور پخت بسیار ساده ای دارد، و ظرف مدت کوتاهی تهیه می شود. ',
        ingredients: [
            'پیاز: ۱ عدد',
            'تخم مرغ: ۳ عدد',
            'نمک: به میزان لازم',
            'فلفل: به میزان لازم',
            'زرد چوبه: به میزان لازم',
            '۱ قاشق غذاخوری روغن مایع (برای جلوگیری از چسبندگی)',
            '۱ قاشق چای‌خوری زردچوبه',
            'گوشت چرخ کرده : به میزان لازم (ترجیها 500گرم -kg 1)',
            'فلفل دلمه‌ای و گوجه‌فرنگی (برای  پختن در کنار کوکو گوشت اختیاری)'
        ],
        
        instructions: [
            'ابتدا پیاز را پوست گرفته، با رنده نرم رنده کرده و آب آن را بگیرید، در ظرفی بریزید و گوشت چرخ کرده را به آن اضافه کنید، هم بزنید تا کاملا پیاز و گوشت چرخ کرده با هم مخلوط شوند، سپس نمک، فلفل و زرد چوبه را اضافه کرده به وسیله قاشق خوب هم بزنید تا طعم مواد یکسان شود.' + '\n\n' +
            
            'تخم مرغ ها را بشکنید به مواد اضافه کنید هم بزنید تا تمام مواد با هم مخلوط شوند، درون تابه مقداری روغن بریزید و در روی حرارت قرار دهید تا روغن داغ شود، سپس مواد آماده شده را درون تابه بریزید و پهن کنید و شعله را کم کنید تا کوکو گوشت خوب بپزد.' + '\n\n' +
          
            'وقتی با حرارت کم یک طرفش سرخ و پخته شد، در همین حالت بگذارید بماند تا سرد شود، سپس در تابه را روی تابه قرار دهید و کوکو را برگردانید، در مرحله بعد دوباره حرارت را روشن کنید و تابه چرب را در روی آن قرار دهید و کوکو را دوباره درون آن بگذارید.' + '\n\n' +
          
            'سپس کوکو را داخل تابه برش بزنید، وقتی کوکو سرخ و پخته شد آن را درون دیس بچینید به وسیله کاهو، گوجه و خیار شور اطراف آن را تزیین کنید.' + '\n\n' +
          
            '*گرفتن بوی زهم گوشت*' + '\n\n' +
          
            'فلفل قرمز 2 قاشق غذا خوری، فلفل سیاه و سفید 2 قاشق غذا خوری، نمک 1 قاشق غذا خوری، پودر جعفری خشک 1 قاشق غذا خوری، پودر رزماری خشک 1 قاشق چای خوری ، پودر ریحان خشک 1 قاشق غذا خوری، پودر پونه خشک 2 قاشق چای خوری، آرد 1 فنجان را با هم مخلوط کنید و در یک شیشه نگهداری نمایید.' + '\n\n' +
          
            'سپس هنگام طبخ غذا 3-2 قاشق غذاخوری از این ادویه به 500 گرم گوشت قرمز ، بیافزایید تا بوی زهم آن از بین برود.'
          ],

        image: '/Image/koko.png'
    },

//    Increase Idea
];



export default App;







