import { TestBed } from '@angular/core/testing';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { ProductstoreService } from './productstore.service';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { Productstore } from './interfaces/product.interface';

const apiUrl = 'https://www.course-api.com/react-store-products';
fdescribe('ProductstoreService', () => {
  let service: ProductstoreService;
  let httpTestingController: HttpTestingController;
  const mockData: Productstore[] = [
    {
      pid: 'marcos-25',
      id: 'recZkNf2kwmdBcqd0',
      name: 'accent chair',
      price: 25999,
      image: 'https://www.course-api.com/images/store/product-1.jpeg',
      colors: ['#ff0000', '#00ff00', '#0000ff'],
      company: 'marcos',
      description:
        'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
      category: 'office',
      shipping: true,
      checked: false,
    },
    // {
    //   id: 'recEHmzvupvT8ZONH',
    //   name: 'albany sectional',
    //   price: 109999,
    //   image: 'https://www.course-api.com/images/store/product-2.jpeg',
    //   colors: ['#000', '#ffb900'],
    //   company: 'liddy',
    //   description:
    //     'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    //   category: 'living room',
    // },
    {
      pid: 'marcos-26',
      id: 'recd1jIVIEChmiwhe',
      name: 'armchair',
      price: 12599,
      image: 'https://www.course-api.com/images/store/product-4.jpeg',
      colors: ['#000', '#00ff00', '#0000ff'],
      company: 'marcos',
      description:
        'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
      category: 'bedroom',
      shipping: true,
      checked: false,
    },
    {
      pid: 'marcos-27',
      id: 'recs5BSVU3qQrOj4E',
      name: 'sofa set',
      price: 129999,
      image: 'https://www.course-api.com/images/store/product-15.jpeg',
      colors: ['#00ff00', '#ffb900'],
      company: 'marcos',
      description:
        'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
      category: 'living room',
      shipping: true,
      checked: false,
    },
    {
      pid: 'marcos-28',
      id: 'rec3jeKnhInKHJuz2',
      name: 'vase table',
      price: 120999,
      image: 'https://www.course-api.com/images/store/product-18.jpeg',
      featured: true,
      colors: ['#ff0000'],
      company: 'marcos',
      description:
        'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
      category: 'office',
      shipping: true,
      checked: false,
    },
  ];
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProductstoreService,
        provideHttpClient(withFetch()),
        provideHttpClientTesting(),
      ],
    });
    service = TestBed.inject(ProductstoreService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the products', () => {
    const companyname = 'marcos';
    service.getProducts(companyname).subscribe((products) => {
      expect(products.length).toBe(4);
      expect(products).toEqual(
        mockData.filter((product) => product.company === companyname)
      );
    });
    const req = httpTestingController.expectOne(
      'https://www.course-api.com/react-store-products'
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockData);
  });
});
