DROP TABLE Projects;

DROP SEQUENCE project_seq;

CREATE TABLE Projects (
    id VARCHAR2(50 CHAR),
    name VARCHAR2(255 CHAR),
    title VARCHAR2(4000 CHAR),
    rate NUMBER(3,1),
    likes NUMBER,
    achive NUMBER,
    author VARCHAR2(255 CHAR),
    category VARCHAR2(100 CHAR),
    upload TIMESTAMP,
    expiration TIMESTAMP,
    premium NUMBER(1)
);

CREATE SEQUENCE project_seq START WITH 1 INCREMENT BY 1 MAXVALUE 999999 CYCLE NOCACHE;

INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('4923ab', '천상의 향기', '차분한 분위기를 연출해주는 천상의 향기, 집에서 편안한 시간을 보내세요.', 4.8, 1765, 432, '향기로운세상', '향초', TO_TIMESTAMP('2023-05-12 09:34:22', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2023-06-12 09:34:22', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('3789cd', '미래의 컵', '디지털 시대에 맞춘 혁신적인 컵, 커피를 더 즐겁게!', 4.2, 1234, 567, '커피마니아', '커피', TO_TIMESTAMP('2024-03-22 14:20:10', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-04-22 14:20:10', 'YYYY-MM-DD HH24:MI:SS'), 0);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('2841ef', '건강한 습관', '자연에서 온 헬스케어 제품, 매일의 건강을 지켜보세요!', 4.6, 2345, 345, '헬스웰니스', '헬스케어', TO_TIMESTAMP('2024-01-09 16:15:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-02-09 16:15:00', 'YYYY-MM-DD HH24:MI:SS'), 0);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('5482gh', '소소한 기쁨', '당신의 하루를 더 행복하게 만들어 줄 소소한 기쁨의 아이템.', 4.3, 2930, 678, '미소스튜디오', '홈/리빙', TO_TIMESTAMP('2023-09-17 10:45:30', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2023-10-17 10:45:30', 'YYYY-MM-DD HH24:MI:SS'), 0);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('6571ij', '스타일 리프트', '패션의 새로운 기준, 스타일 리프트로 당신의 매력을 한층 업그레이드하세요.', 4.9, 3456, 789, '스타일크래프트', '패션', TO_TIMESTAMP('2024-02-14 12:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-03-14 12:00:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('8312kl', '편안한 하루', '집에서의 편안함을 더해주는 아이템, 당신의 휴식을 지원합니다.', 3.9, 876, 234, '안락한집', '홈/리빙', TO_TIMESTAMP('2023-12-01 18:30:45', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-01-01 18:30:45', 'YYYY-MM-DD HH24:MI:SS'), 0);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('9456mn', '청정 에너지', '자연의 힘을 담은 헬스케어 제품, 당신의 건강을 지켜주는 필수 아이템.', 4.7, 3045, 456, '헬스밸리', '헬스케어', TO_TIMESTAMP('2024-06-18 09:10:05', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-07-18 09:10:05', 'YYYY-MM-DD HH24:MI:SS'), 0);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('7584op', '모던 문구', '디지털 시대에도 손맛이 느껴지는 모던한 문구들, 문서 작업을 더욱 즐겁게.', 4.4, 1250, 980, '문구천국', '문구', TO_TIMESTAMP('2024-05-25 08:20:30', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-06-25 08:20:30', 'YYYY-MM-DD HH24:MI:SS'), 0);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('5623qr', '빛나는 하루', '매일매일 빛나는 하루를 만들어주는 특별한 아이템, 하루의 시작을 밝히세요.', 4.0, 1980, 345, '일상스튜디오', '홈/리빙', TO_TIMESTAMP('2023-08-10 07:55:30', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2023-09-10 07:55:30', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('6718st', '디지털 뷰', '최신 기술이 적용된 디지털 미디어 아이템, 새로운 시각을 경험해보세요.', 4.1, 2100, 789, '미디어플래닛', '디지털 미디어', TO_TIMESTAMP('2024-04-05 11:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-05-05 11:00:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('9834uv', '산책의 즐거움', '반려동물과 함께하는 산책을 더욱 즐겁게 만들어주는 아이템.', 4.5, 1430, 233, '펫러버', '반려 동물', TO_TIMESTAMP('2023-11-11 17:30:15', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2023-12-11 17:30:15', 'YYYY-MM-DD HH24:MI:SS'), 0);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('8942wx', '이노베이티브', '혁신적인 디자인의 디지털 기기, 새로운 경험을 제공합니다.', 4.7, 3210, 1200, '테크트렌드', '디지털 미디어', TO_TIMESTAMP('2024-07-01 13:20:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-08-01 13:20:00', 'YYYY-MM-DD HH24:MI:SS'), 0);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('7109yz', '자연의 맛', '신선한 재료로 만든 건강한 식품, 매일의 식사를 더 맛있게.', 4.4, 1900, 456, '푸드마스터', '식품', TO_TIMESTAMP('2024-05-15 15:40:25', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-06-15 15:40:25', 'YYYY-MM-DD HH24:MI:SS'), 0);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('4857mg', '피톤치드 향초', '자연의 향기를 그대로 담은 피톤치드 향초로 집안 분위기를 한층 아늑하게!', 4.7, 1923, 235, '향기나라', '향초', TO_TIMESTAMP('2023-05-17 09:30:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2023-06-17 09:30:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('9264qt', '스마트 텀블러', '온도 유지가 가능한 스마트 텀블러로, 언제 어디서나 최적의 음료 온도를 유지하세요.', 4.3, 3054, 412, 'FutureTech', '홈/리빙', TO_TIMESTAMP('2023-02-22 14:45:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2023-03-22 14:45:00', 'YYYY-MM-DD HH24:MI:SS'), 0);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('1950as', '오가닉 수제 초콜릿', '순수한 맛과 질감의 오가닉 수제 초콜릿, 모든 초콜릿 애호가의 꿈을 실현하다.', 4.9, 3790, 528, '초콜릿 앤드', '식품', TO_TIMESTAMP('2024-01-05 18:22:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-02-05 18:22:00', 'YYYY-MM-DD HH24:MI:SS'), 0);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('3748zk', '힐링 커피', '매일 아침, 상쾌하게 시작할 수 있는 힐링 커피로 하루를 여세요.', 4.6, 1542, 323, '커피 중독', '커피', TO_TIMESTAMP('2023-07-10 08:15:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2023-08-10 08:15:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('5829lv', '디지털 사진 프레임', '고해상도 디지털 사진 프레임으로 소중한 순간을 언제든지 감상하세요.', 4.4, 2751, 142, 'Tech Vision', '디지털 미디어', TO_TIMESTAMP('2023-03-13 16:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2023-04-13 16:00:00', 'YYYY-MM-DD HH24:MI:SS'), 0);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('9481jf', '강아지 장난감 세트', '우리 강아지를 위한 다양한 장난감이 포함된 장난감 세트, 행복한 놀이 시간을 보장합니다.', 4.8, 3107, 290, '펫월드', '반려 동물', TO_TIMESTAMP('2024-03-29 12:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-04-29 12:00:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('2049rw', '스마트 홈 허브', '스마트 홈 시스템의 중심, 모든 기기를 연결하고 제어할 수 있는 스마트 홈 허브.', 4.5, 3870, 213, 'HomeTech', '홈/리빙', TO_TIMESTAMP('2024-06-21 20:20:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-07-21 20:20:00', 'YYYY-MM-DD HH24:MI:SS'), 0);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('7592xk', '홈 베이킹 키트', '집에서도 손쉽게 맛있는 빵을 구울 수 있는 홈 베이킹 키트, 제빵의 즐거움을 느껴보세요.', 4.2, 2450, 334, '베이커리 마스터', '식품', TO_TIMESTAMP('2023-09-10 11:25:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2023-10-10 11:25:00', 'YYYY-MM-DD HH24:MI:SS'), 0);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('6104vza', '휴대용 블렌더', '언제 어디서나 간편하게 건강한 음료를 만드는 휴대용 블렌더, 편리함을 경험하세요.', 4.6, 1423, 550, '헬스 더하기', '헬스케어', TO_TIMESTAMP('2023-04-16 10:10:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2023-05-16 10:10:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('9275bz', '디지털 캘린더', '시간 관리의 최전선, 모든 스케줄을 한눈에 볼 수 있는 디지털 캘린더.', 4.7, 3589, 124, 'TimeMaster', '디지털 미디어', TO_TIMESTAMP('2023-06-30 15:50:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2023-07-30 15:50:00', 'YYYY-MM-DD HH24:MI:SS'), 0);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('3047dy', '클래식 핸드백', '시대를 초월한 매력, 클래식 핸드백으로 세련된 스타일을 완성하세요.', 4.4, 2205, 312, '패션 앤드', '패션', TO_TIMESTAMP('2024-01-18 13:40:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-02-18 13:40:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('5820tw', '유기농 티백 세트', '매일 건강하게 마실 수 있는 유기농 티백 세트, 자연의 맛을 즐기세요.', 4.3, 3347, 150, '티 타임', '식품', TO_TIMESTAMP('2023-11-25 19:30:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2023-12-25 19:30:00', 'YYYY-MM-DD HH24:MI:SS'), 0);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('6782pl', '홈 오디오 시스템', '집에서 즐기는 최고의 음질, 홈 오디오 시스템으로 음악을 새로운 차원으로 경험하세요.', 4.8, 3296, 290, 'SoundWave', '디지털 미디어', TO_TIMESTAMP('2023-08-03 21:10:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2023-09-03 21:10:00', 'YYYY-MM-DD HH24:MI:SS'), 0);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('4057kx', '스마트 홈 보안 시스템', '안전한 집을 위한 스마트 홈 보안 시스템, 실시간 모니터링으로 걱정 없는 생활을 제공합니다.', 4.6, 2456, 350, 'HomeGuard', '홈/리빙', TO_TIMESTAMP('2023-10-04 12:20:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2023-11-04 12:20:00', 'YYYY-MM-DD HH24:MI:SS'), 0);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('6182yq', '에코백 세트', '환경을 생각한 에코백 세트, 패션과 환경을 모두 챙길 수 있는 스마트한 선택입니다.', 4.3, 1598, 678, 'GreenLife', '패션', TO_TIMESTAMP('2023-11-22 15:35:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2023-12-22 15:35:00', 'YYYY-MM-DD HH24:MI:SS'), 0);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('3749vc', '모던 향초', '모던한 디자인과 은은한 향으로 집안을 더욱 고급스럽게 꾸며주는 향초입니다.', 4.8, 2678, 312, '향수의 미', '향초', TO_TIMESTAMP('2024-03-09 11:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-04-09 11:00:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('9273lp', '스마트 식물 화분', '스마트 기술이 적용된 식물 화분, 집에서 쉽게 식물을 기를 수 있도록 도와줍니다.', 4.4, 1984, 420, 'GreenTech', '홈/리빙', TO_TIMESTAMP('2024-02-20 10:20:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-03-20 10:20:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('1946tw', '미니 가습기', '작고 효율적인 미니 가습기로 상쾌한 공기를 유지하세요. 어디서든 편리하게 사용할 수 있습니다.', 4.5, 2189, 130, 'AirCare', '홈/리빙', TO_TIMESTAMP('2024-06-15 13:25:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-07-15 13:25:00', 'YYYY-MM-DD HH24:MI:SS'), 0);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('5842qm', '클래식 양초', '우아한 분위기를 자아내는 클래식 양초, 고급스러운 인테리어에 어울리는 선택입니다.', 4.7, 3225, 298, '조명연구소', '향초', TO_TIMESTAMP('2023-08-18 16:15:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2023-09-18 16:15:00', 'YYYY-MM-DD HH24:MI:SS'), 0);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('3827tn', '업그레이드 커피머신', '커피 애호가를 위한 업그레이드 커피머신, 완벽한 커피 한 잔을 집에서 쉽게 만들 수 있습니다.', 4.6, 2589, 189, 'CoffeeMasters', '커피', TO_TIMESTAMP('2023-07-12 17:30:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2023-08-12 17:30:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('6820jc', '스마트 플러그', '스마트 플러그로 가전제품을 간편하게 제어하고, 에너지 절약을 실천하세요.', 4.3, 1740, 275, 'SmartPlug Co.', '홈/리빙', TO_TIMESTAMP('2023-12-10 18:10:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-01-10 18:10:00', 'YYYY-MM-DD HH24:MI:SS'), 0);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('7492lp', '에너지 드링크', '활력을 제공하는 에너지 드링크, 피로를 날려버리고 활기찬 하루를 시작하세요.', 4.2, 1400, 398, '에너지 플러스', '식품', TO_TIMESTAMP('2023-11-07 09:50:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2023-12-07 09:50:00', 'YYYY-MM-DD HH24:MI:SS'), 0);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('2837wm', '패셔너블 스카프', '세련된 디자인의 패셔너블 스카프, 어떤 옷에도 잘 어울리는 멋진 액세서리입니다.', 4.5, 2022, 350, '패션 핸드', '패션', TO_TIMESTAMP('2023-09-28 14:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2023-10-28 14:00:00', 'YYYY-MM-DD HH24:MI:SS'), 0);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('9218hz', '자동 물걸레 청소기', '자동 물걸레 청소기로 손쉽게 바닥을 깨끗하게 청소하세요. 시간 절약과 효율적인 청소를 보장합니다.', 4.6, 3320, 250, 'CleanHome', '홈/리빙', TO_TIMESTAMP('2023-08-30 16:45:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2023-09-30 16:45:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('6720kx', '알레르기 방지 필터', '공기 중의 알레르기 유발 물질을 걸러주는 필터, 깨끗한 공기를 보장합니다.', 4.4, 1989, 129, 'AirQuality', '홈/리빙', TO_TIMESTAMP('2024-01-12 11:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-02-12 11:00:00', 'YYYY-MM-DD HH24:MI:SS'), 0);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('7438vj', '맞춤형 문구 세트', '개인화된 메시지를 담을 수 있는 맞춤형 문구 세트, 특별한 사람에게 특별한 선물을 하세요.', 4.7, 2690, 160, '문구 마스터', '문구', TO_TIMESTAMP('2023-12-21 17:20:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-01-21 17:20:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('8352lw', '프리미엄 티세트', '우아한 티타임을 위한 프리미엄 티세트, 고급스러운 차 한 잔의 여유를 즐기세요.', 4.5, 2890, 480, 'TeaLuxury', '식품', TO_TIMESTAMP('2024-05-01 12:15:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-06-01 12:15:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('5920zk', '휴대용 캠핑 조명', '캠핑이나 야외 활동 시 유용한 휴대용 캠핑 조명, 어두운 곳에서도 밝고 안전하게!', 4.6, 2089, 234, 'OutdoorGear', '홈/리빙', TO_TIMESTAMP('2024-02-08 14:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-03-08 14:00:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('3024vn', '건강식 스낵', '맛있으면서도 건강한 스낵으로 간편하게 건강을 챙기세요.', 4.4, 3121, 320, '헬스너리', '식품', TO_TIMESTAMP('2023-10-01 11:30:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2023-11-01 11:30:00', 'YYYY-MM-DD HH24:MI:SS'), 0);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('7420qx', '디지털 명함', '현대적인 디지털 명함으로 네트워킹을 더 스마트하게, 휴대성과 편리함을 동시에!', 4.5, 1980, 267, 'TechPro', '디지털 미디어', TO_TIMESTAMP('2023-11-11 13:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2023-12-11 13:00:00', 'YYYY-MM-DD HH24:MI:SS'), 0);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('9362rz', '휴대용 블렌더', '어디서든 신선한 스무디를 즐길 수 있는 휴대용 블렌더, 간편하고 빠른 사용이 가능합니다.', 4.6, 1422, 450, 'BlendPro', '디지털 미디어', TO_TIMESTAMP('2024-03-10 14:45:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-04-10 14:45:00', 'YYYY-MM-DD HH24:MI:SS'), 0);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('4836uy', '패셔너블 에코백', '친환경 소재로 제작된 패셔너블 에코백, 세련된 디자인과 실용성을 동시에 갖췄습니다.', 4.5, 1745, 288, 'EcoStyle', '패션', TO_TIMESTAMP('2024-06-04 10:30:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-07-04 10:30:00', 'YYYY-MM-DD HH24:MI:SS'), 0);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('6713zk', '디지털 체중계', '정확한 측정을 제공하는 디지털 체중계, 건강 관리에 필수적인 제품입니다.', 4.4, 1543, 312, 'HealthTech', '헬스케어', TO_TIMESTAMP('2024-04-15 12:20:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-05-15 12:20:00', 'YYYY-MM-DD HH24:MI:SS'), 0);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('7548tg', '미니 프로젝트', '작고 강력한 미니 프로젝트, 이동성과 성능을 모두 갖춘 최고의 선택입니다.', 4.7, 1920, 150, 'MiniTech', '디지털 미디어', TO_TIMESTAMP('2023-12-01 16:10:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-01-01 16:10:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('3192fk', '휴대용 에어컨', '여름철 필수 아이템, 휴대용 에어컨으로 시원하게 여름을 나세요.', 4.5, 2230, 341, 'CoolTech', '홈/리빙', TO_TIMESTAMP('2024-05-05 12:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-06-05 12:00:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('4820cz', '스마트 보조배터리', '휴대성과 고속 충전을 제공하는 스마트 보조배터리, 언제 어디서나 전력을 공급합니다.', 4.3, 1890, 275, 'ChargeUp', '디지털 미디어', TO_TIMESTAMP('2024-01-20 10:30:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-02-20 10:30:00', 'YYYY-MM-DD HH24:MI:SS'), 0);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('5930zb', '프리미엄 바디로션', '부드럽고 촉촉한 피부를 위한 프리미엄 바디로션, 한층 더 매끄럽고 건강한 피부로 가꾸세요.', 4.5, 2390, 123, 'SkinCarePro', '헬스케어', TO_TIMESTAMP('2024-07-10 14:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-08-10 14:00:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('3748ml', '디지털 사진액자', '가족과 친구들의 소중한 순간을 담은 디지털 사진액자, 집안을 더욱 따뜻하게 만들어 줍니다.', 4.4, 1640, 390, 'PhotoFrame', '디지털 미디어', TO_TIMESTAMP('2024-03-22 11:40:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-04-22 11:40:00', 'YYYY-MM-DD HH24:MI:SS'), 0);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('8295lc', '프리미엄 문구 세트', '고급스러운 디자인의 프리미엄 문구 세트, 작업을 더욱 효율적으로 만들어주는 도구입니다.', 4.7, 1985, 400, '문구의 신', '문구', TO_TIMESTAMP('2024-08-05 16:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-09-05 16:00:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('4902kh', '업그레이드 목걸이', '세련된 디자인과 기능성을 갖춘 업그레이드 목걸이, 모든 스타일에 어울립니다.', 4.6, 2130, 210, 'NeckStyle', '패션', TO_TIMESTAMP('2024-05-10 17:30:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-06-10 17:30:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('6891tn', '스마트 에어프라이어', '건강하고 맛있는 요리를 위한 스마트 에어프라이어, 간편하게 요리해 보세요.', 4.8, 3280, 320, 'HealthyCook', '홈/리빙', TO_TIMESTAMP('2023-12-12 14:20:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-01-12 14:20:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('5201zm', '스마트 헬스케어 디바이스', '스마트 헬스케어 디바이스로 건강을 모니터링하고, 일상적인 건강 관리에 도움을 주는 제품입니다.', 4.6, 1790, 580, 'HealthMonitor', '헬스케어', TO_TIMESTAMP('2024-07-07 10:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-08-07 10:00:00', 'YYYY-MM-DD HH24:MI:SS'), 0);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('4372jx', '가죽 지갑', '세련된 디자인의 가죽 지갑, 고급스러움과 실용성을 동시에 갖춘 필수 아이템입니다.', 4.4, 2220, 190, 'LeatherCraft', '패션', TO_TIMESTAMP('2024-04-02 16:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-05-02 16:00:00', 'YYYY-MM-DD HH24:MI:SS'), 0);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('2805tw', '액세서리 정리함', '모든 액세서리를 깔끔하게 정리할 수 있는 액세서리 정리함, 정돈된 공간을 만들어줍니다.', 4.6, 1490, 312, 'OrganizerPro', '홈/리빙', TO_TIMESTAMP('2024-01-25 15:15:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-02-25 15:15:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('4972zp', 'LED 책상 램프', '조명이 부드럽고 눈에 편안한 LED 책상 램프, 공부와 작업에 이상적인 제품입니다.', 4.5, 2340, 165, 'LightPro', '홈/리빙', TO_TIMESTAMP('2024-05-20 14:30:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-06-20 14:30:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('3756ry', '휴대용 마사지기', '어디서든 간편하게 사용할 수 있는 휴대용 마사지기, 피로를 날려버리세요.', 4.7, 2790, 300, 'MassagePlus', '헬스케어', TO_TIMESTAMP('2023-11-18 13:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2023-12-18 13:00:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('5920wg', '스마트 수면 추적기', '수면 패턴을 분석해 건강한 수면을 돕는 스마트 수면 추적기, 더 나은 수면을 제공합니다.', 4.8, 2120, 400, 'SleepWell', '헬스케어', TO_TIMESTAMP('2024-03-01 12:30:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-04-01 12:30:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('8049hn', '스마트 전구', '스마트폰으로 제어할 수 있는 스마트 전구, 조명 색상과 밝기를 자유롭게 조절하세요.', 4.4, 1420, 290, 'LightTech', '홈/리빙', TO_TIMESTAMP('2024-04-22 11:30:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-05-22 11:30:00', 'YYYY-MM-DD HH24:MI:SS'), 0);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('5823wp', '홈케어 제품', '집에서 간편하게 사용할 수 있는 홈케어 제품, 일상의 편리함을 더해줍니다.', 4.3, 2110, 150, 'HomeCare', '홈/리빙', TO_TIMESTAMP('2023-09-09 16:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2023-10-09 16:00:00', 'YYYY-MM-DD HH24:MI:SS'), 0);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('4721vn', '스마트 펫 배식기', '스마트 기능이 적용된 펫 배식기, 반려동물의 식사를 보다 편리하게 관리할 수 있습니다.', 4.6, 2390, 230, 'PetSmart', '반려 동물', TO_TIMESTAMP('2024-02-12 13:15:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-03-12 13:15:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('5094kw', '패셔너블 모자', '세련된 디자인의 패셔너블 모자, 다양한 스타일에 잘 어울리는 멋진 액세서리입니다.', 4.5, 1720, 500, 'FashionHub', '패션', TO_TIMESTAMP('2023-08-05 17:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2023-09-05 17:00:00', 'YYYY-MM-DD HH24:MI:SS'), 0);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('8473jx', '포터블 블루투스 스피커', '휴대가 간편한 포터블 블루투스 스피커, 언제 어디서나 음악을 즐기세요.', 4.4, 2190, 185, 'AudioGear', '디지털 미디어', TO_TIMESTAMP('2024-02-28 15:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-03-28 15:00:00', 'YYYY-MM-DD HH24:MI:SS'), 0);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('6584tr', '건강 보조제', '건강을 지키는 건강 보조제, 매일 간편하게 건강을 챙기세요.', 4.5, 2890, 325, 'HealthPlus', '헬스케어', TO_TIMESTAMP('2024-03-25 13:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-04-25 13:00:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('6913xn', '모던 홈 데코', '모던하고 세련된 홈 데코, 집안을 한층 더 아름답게 꾸며줍니다.', 4.7, 2100, 220, 'DecorStyle', '홈/리빙', TO_TIMESTAMP('2024-01-15 12:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-02-15 12:00:00', 'YYYY-MM-DD HH24:MI:SS'), 0);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('8371lp', '스마트 방충기', '효율적으로 방충을 도와주는 스마트 방충기, 여름철 편안한 환경을 제공합니다.', 4.5, 1750, 320, 'PestGuard', '홈/리빙', TO_TIMESTAMP('2024-05-15 14:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-06-15 14:00:00', 'YYYY-MM-DD HH24:MI:SS'), 0);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('9642rw', '커피 원두 세트', '다양한 맛을 즐길 수 있는 커피 원두 세트, 매일 아침 풍부한 커피 향을 느껴보세요.', 4.7, 2500, 400, 'CoffeeWorld', '커피', TO_TIMESTAMP('2024-02-20 11:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-03-20 11:00:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('4893kd', '프리미엄 향초', '고급스러운 향과 디자인의 프리미엄 향초, 집안의 분위기를 한층 더 아늑하게 만들어줍니다.', 4.6, 2290, 150, 'ScentedJoy', '향초', TO_TIMESTAMP('2024-06-20 13:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-07-20 13:00:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('5278tj', '모던 문구 세트', '모던하고 세련된 디자인의 문구 세트, 일상에서 유용하게 사용할 수 있는 필수 아이템입니다.', 4.4, 1980, 230, 'ModernStationery', '문구', TO_TIMESTAMP('2024-03-15 10:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-04-15 10:00:00', 'YYYY-MM-DD HH24:MI:SS'), 0);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('3914zp', '홈트레이닝 기구', '집에서 간편하게 운동할 수 있는 홈트레이닝 기구, 건강한 몸을 유지하세요.', 4.6, 2100, 350, 'HomeFit', '헬스케어', TO_TIMESTAMP('2024-07-10 12:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-08-10 12:00:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('5723xb', '다기능 충전기', '여러 장비를 동시에 충전할 수 있는 다기능 충전기, 실용성과 편리함을 제공합니다.', 4.5, 1450, 270, 'ChargeMaster', '디지털 미디어', TO_TIMESTAMP('2024-01-12 15:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-02-12 15:00:00', 'YYYY-MM-DD HH24:MI:SS'), 0);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('6702pk', '세련된 패션 백팩', '모던한 디자인의 패션 백팩, 어떤 스타일에도 잘 어울리며 실용성을 제공합니다.', 4.7, 1880, 400, 'FashionPlus', '패션', TO_TIMESTAMP('2024-06-25 14:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-07-25 14:00:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('2918xz', '프리미엄 스킨케어 세트', '고급 성분으로 만들어진 프리미엄 스킨케어 세트, 피부를 더욱 매끄럽고 건강하게 유지하세요.', 4.8, 3200, 200, 'SkinEssentials', '헬스케어', TO_TIMESTAMP('2024-03-30 11:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-04-30 11:00:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('4095qw', '스마트 체온계', '정확한 체온 측정이 가능한 스마트 체온계, 건강 관리를 더욱 효율적으로 도와줍니다.', 4.4, 1990, 150, 'ThermoTech', '헬스케어', TO_TIMESTAMP('2024-02-10 10:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-03-10 10:00:00', 'YYYY-MM-DD HH24:MI:SS'), 0);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('8643jq', '모던 스피커', '세련된 디자인과 우수한 음질의 모던 스피커, 집안의 분위기를 한층 더 고급스럽게 만들어줍니다.', 4.6, 2800, 175, 'AudioElite', '디지털 미디어', TO_TIMESTAMP('2024-06-15 14:30:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-07-15 14:30:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('3052ph', '스마트 도어벨', '스마트폰으로 제어 가능한 스마트 도어벨, 집안의 안전을 한층 강화합니다.', 4.7, 2360, 220, 'HomeGuard', '홈/리빙', TO_TIMESTAMP('2024-04-05 12:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-05-05 12:00:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('4820qw', '자동 청소 로봇', '자동으로 청소해주는 로봇, 편리하게 집안을 깨끗하게 유지할 수 있습니다.', 4.6, 1970, 250, 'CleanRobot', '홈/리빙', TO_TIMESTAMP('2024-05-01 13:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-06-01 13:00:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('6723zk', '프리미엄 핸드크림', '부드럽고 촉촉한 피부를 위한 프리미엄 핸드크림, 매일 사용으로 손을 더욱 부드럽게.', 4.8, 2450, 180, 'HandCarePro', '헬스케어', TO_TIMESTAMP('2024-08-01 10:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-09-01 10:00:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('9421ql', '오가닉 베이비 식품', '자연에서 온 오가닉 베이비 식품, 아기에게 가장 안전하고 건강한 식사를 제공합니다.', 4.8, 3250, 210, 'BabyCare', '식품', TO_TIMESTAMP('2024-02-20 12:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-03-20 12:00:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('4839jx', '스마트 체중계', '정확한 체중 측정과 함께 건강 상태를 분석해주는 스마트 체중계, 건강 관리의 필수품입니다.', 4.6, 1580, 290, 'WeightTrack', '헬스케어', TO_TIMESTAMP('2024-03-05 15:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-04-05 15:00:00', 'YYYY-MM-DD HH24:MI:SS'), 0);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('3962mg', '휴대용 공기 청정기', '어디서나 깨끗한 공기를 제공하는 휴대용 공기 청정기, 공기 질 걱정을 덜어줍니다.', 4.7, 2450, 200, 'CleanAir', '홈/리빙', TO_TIMESTAMP('2024-07-01 10:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-08-01 10:00:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('3948tw', '무선 블루투스 이어폰', '무선 블루투스 이어폰, 뛰어난 음질과 편리한 무선 사용으로 음악을 즐기세요.', 4.4, 1810, 180, '최승준', '디지털 미디어', TO_TIMESTAMP('2024-04-20 12:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-05-20 12:00:00', 'YYYY-MM-DD HH24:MI:SS'), 0);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('4916zc', '고급 수제 초콜릿', '고급 수제 초콜릿, 특별한 날 더욱 달콤한 순간을 선사합니다.', 4.8, 2900, 240, 'ChocoDelight', '식품', TO_TIMESTAMP('2024-01-20 14:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-02-20 14:00:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('4893yl', '고급 가죽 지갑', '세련된 디자인의 고급 가죽 지갑, 실용성과 품격을 동시에 갖춘 아이템입니다.', 4.6, 2100, 320, 'LeatherLux', '패션', TO_TIMESTAMP('2024-05-25 12:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-06-25 12:00:00', 'YYYY-MM-DD HH24:MI:SS'), 0);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('5963kp', '스마트 커피머신', '스마트 기능이 적용된 커피머신, 매일 신선한 커피를 편리하게 즐기세요.', 4.5, 2400, 300, 'BrewMaster', '커피', TO_TIMESTAMP('2024-06-01 10:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-07-01 10:00:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('6724zp', '휴대용 공기 청정기', '언제 어디서나 깨끗한 공기를, 휴대용 공기 청정기로 간편하게 해결하세요.', 4.4, 2050, 180, 'AirPure', '홈/리빙', TO_TIMESTAMP('2024-04-10 13:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-05-10 13:00:00', 'YYYY-MM-DD HH24:MI:SS'), 0);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('5742rd', '스마트 온도계', '정확한 온도 측정과 편리한 데이터 저장 기능을 갖춘 스마트 온도계입니다.', 4.6, 2300, 250, 'TempSense', '헬스케어', TO_TIMESTAMP('2024-07-10 11:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-08-10 11:00:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('3917jp', '패션 선글라스', '스타일리시한 디자인의 패션 선글라스, 여름철 자외선으로부터 눈을 보호하세요.', 4.4, 1920, 150, 'SunnyEyes', '패션', TO_TIMESTAMP('2024-06-05 10:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-07-05 10:00:00', 'YYYY-MM-DD HH24:MI:SS'), 0);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('4987nk', '스마트 발열 담요', '스마트폰으로 온도를 조절할 수 있는 발열 담요, 겨울철 따뜻함을 제공합니다.', 4.8, 2600, 220, 'WarmTech', '홈/리빙', TO_TIMESTAMP('2024-01-15 14:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-02-15 14:00:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('4301mb', '스마트 스피커', '음성 인식과 다양한 기능을 갖춘 스마트 스피커, 집안의 분위기를 한층 더 편리하게 만들어줍니다.', 4.6, 2320, 250, 'SmartSound', '디지털 미디어', TO_TIMESTAMP('2024-07-01 11:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-08-01 11:00:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('4950vp', '스마트 체온계', '정확한 체온 측정과 건강 관리에 도움을 주는 스마트 체온계, 필수 아이템입니다.', 4.7, 2540, 200, 'ThermoCare', '헬스케어', TO_TIMESTAMP('2024-05-25 12:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-06-25 12:00:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('3065mr', '고급 블루투스 스피커', '탁월한 음질과 디자인의 고급 블루투스 스피커, 어떤 환경에서도 뛰어난 사운드를 제공합니다.', 4.5, 2100, 200, 'SoundMaster', '디지털 미디어', TO_TIMESTAMP('2024-06-15 12:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-07-15 12:00:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('4702ql', '스마트 백팩', '내장된 충전 포트와 다양한 수납 공간이 있는 스마트 백팩, 일상과 여행에 편리함을 더합니다.', 4.6, 1900, 210, 'BagTech', '패션', TO_TIMESTAMP('2024-04-05 13:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-05-05 13:00:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('5041vn', '프리미엄 요가 매트', '편안하고 미끄러짐 없는 프리미엄 요가 매트, 운동 시 안정감을 제공합니다.', 4.7, 2200, 250, 'YogaComfort', '헬스케어', TO_TIMESTAMP('2024-03-25 14:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-04-25 14:00:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('5417kj', '디지털 건강 모니터', '혈압, 심박수 등 건강 상태를 실시간으로 모니터링할 수 있는 디지털 건강 모니터.', 4.8, 2750, 300, 'HealthMonitor', '헬스케어', TO_TIMESTAMP('2024-05-10 12:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-06-10 12:00:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('4923zg', '스마트 와이어리스 충전기', '무선으로 빠르고 편리하게 기기를 충전할 수 있는 스마트 와이어리스 충전기.', 4.4, 1750, 180, 'ChargeTech', '디지털 미디어', TO_TIMESTAMP('2024-04-10 15:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-05-10 15:00:00', 'YYYY-MM-DD HH24:MI:SS'), 0);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('5241lp', '프리미엄 자전거 헬멧', '안전성과 스타일을 갖춘 프리미엄 자전거 헬멧, 자전거 타는 즐거움을 더욱 안전하게.', 4.6, 1850, 220, 'BikeSafe', '헬스케어', TO_TIMESTAMP('2024-07-15 12:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-08-15 12:00:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('5830dm', '고급 와인 오프너', '세련된 디자인과 기능성을 갖춘 고급 와인 오프너, 와인 오픈을 더욱 즐겁게 만들어줍니다.', 4.5, 1500, 200, 'WineGourmet', '식품', TO_TIMESTAMP('2024-06-20 11:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-07-20 11:00:00', 'YYYY-MM-DD HH24:MI:SS'), 0);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('5917xz', '스마트 주방 저울', '정확한 무게 측정과 다양한 요리 모드를 지원하는 스마트 주방 저울.', 4.6, 1650, 230, 'KitchenTech', '홈/리빙', TO_TIMESTAMP('2024-07-01 10:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-08-01 10:00:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('5983pl', '프리미엄 런닝화', '편안한 착용감과 우수한 충격 흡수 기능을 갖춘 프리미엄 런닝화, 운동 시 최상의 성능을 제공합니다.', 4.7, 2400, 270, 'RunFlex', '패션', TO_TIMESTAMP('2024-03-01 12:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-04-01 12:00:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('5708kr', '스마트 블루투스 이어폰', '선명한 음질과 편리한 무선 연결을 자랑하는 스마트 블루투스 이어폰, 음악을 자유롭게 즐기세요.', 4.5, 2000, 210, 'AudioPro', '디지털 미디어', TO_TIMESTAMP('2024-01-15 14:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-02-15 14:00:00', 'YYYY-MM-DD HH24:MI:SS'), 0);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('5349wp', '스마트 온열 패드', '온도를 조절할 수 있는 스마트 온열 패드, 추운 날씨에 따뜻함을 제공합니다.', 4.6, 1950, 200, 'HeatSense', '홈/리빙', TO_TIMESTAMP('2024-02-15 13:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-03-15 13:00:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('5864qt', '스마트 식물 재배기', '집에서도 쉽게 식물을 기를 수 있는 스마트 식물 재배기, 자동으로 물과 빛을 조절해줍니다.', 4.7, 2100, 220, 'PlantGrow', '홈/리빙', TO_TIMESTAMP('2024-05-05 12:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-06-05 12:00:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('5728kf', '프리미엄 미러', '세련된 디자인과 함께 뛰어난 반사율을 자랑하는 프리미엄 미러, 집안을 더 아름답게 꾸며줍니다.', 4.6, 1750, 190, 'MirrorLux', '홈/리빙', TO_TIMESTAMP('2024-01-20 10:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-02-20 10:00:00', 'YYYY-MM-DD HH24:MI:SS'), 0);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('4532xb', '스마트 온도 조절기', '정확한 온도 조절과 에너지 절약 기능을 갖춘 스마트 온도 조절기.', 4.5, 1850, 200, 'ClimateControl', '홈/리빙', TO_TIMESTAMP('2024-07-10 11:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-08-10 11:00:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('5632jt', '고급 필터 커피 메이커', '향긋한 커피를 쉽게 만들 수 있는 고급 필터 커피 메이커, 커피 애호가를 위한 완벽한 선택입니다.', 4.8, 2200, 270, 'CoffeeCraft', '식품', TO_TIMESTAMP('2024-06-25 14:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-07-25 14:00:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('5174mw', '고급 수면 마스크', '편안한 착용감과 차단 효과를 갖춘 고급 수면 마스크, 깊은 잠을 돕습니다.', 4.7, 2000, 230, 'SleepEase', '헬스케어', TO_TIMESTAMP('2024-03-01 11:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-04-01 11:00:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('5013tl', '고급 와인 세트', '선별된 와인으로 구성된 고급 와인 세트, 특별한 날에 더없이 좋은 선물입니다.', 4.8, 2500, 280, 'WineSelect', '식품', TO_TIMESTAMP('2024-04-15 12:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-05-15 12:00:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('5692jq', '스마트 가습기', '효율적인 가습과 공기 정화를 동시에 할 수 있는 스마트 가습기.', 4.6, 1850, 200, 'AirPure', '홈/리빙', TO_TIMESTAMP('2024-02-20 11:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-03-20 11:00:00', 'YYYY-MM-DD HH24:MI:SS'), 0);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('4847zf', '고급 차 세트', '다양한 종류의 고급 차가 포함된 차 세트, 정성스러운 선물이나 휴식의 순간에 적합합니다.', 4.7, 2100, 250, 'TeaLuxury', '식품', TO_TIMESTAMP('2024-05-10 14:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-06-10 14:00:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('6482vm', '휴대용 공기 청정기', '편리하게 휴대할 수 있는 공기 청정기, 청정한 공기를 언제 어디서나.', 4.6, 1800, 200, '청정미래', '홈/리빙', TO_TIMESTAMP('2024-03-15 09:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-04-15 09:00:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('4936cz', '스마트 체중계', '정확한 체중 측정과 건강 지표를 제공하는 스마트 체중계, 건강 관리의 필수품.', 4.7, 1900, 210, '헬스지기', '헬스케어', TO_TIMESTAMP('2024-01-10 14:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-02-10 14:00:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('5723qp', '디지털 온도계', '정확한 측정과 빠른 결과를 제공하는 디지털 온도계, 건강 체크에 유용합니다.', 4.5, 1600, 180, '건강웰빙', '헬스케어', TO_TIMESTAMP('2024-05-25 10:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-06-25 10:00:00', 'YYYY-MM-DD HH24:MI:SS'), 0);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('5847vn', '스마트 에어프라이어', '간편하게 건강한 요리를 할 수 있는 스마트 에어프라이어, 맛있는 요리가 빠릅니다.', 4.8, 2000, 230, '요리천사', '홈/리빙', TO_TIMESTAMP('2024-06-05 12:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-07-05 12:00:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('5498lj', '스마트 음성 인식 스피커', '음성으로 다양한 기능을 제어할 수 있는 스마트 스피커, 더 스마트한 생활을 제공합니다.', 4.6, 1950, 210, '음성마스터', '디지털 미디어', TO_TIMESTAMP('2024-02-20 15:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-03-20 15:00:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('5207xd', '프리미엄 바디 케어 기기', '전신 마사지와 혈액 순환을 도와주는 프리미엄 바디 케어 기기.', 4.7, 2100, 240, '몸짱케어', '헬스케어', TO_TIMESTAMP('2024-07-10 13:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-08-10 13:00:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('5918tr', '스마트 냉장고', '스마트 기능과 효율적인 공간 활용을 자랑하는 냉장고, 최신 기술을 갖춘 주방 필수품.', 4.5, 2200, 250, '냉장고왕', '홈/리빙', TO_TIMESTAMP('2024-04-05 11:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-05-05 11:00:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('5350nw', '스마트 모니터', '선명한 화면과 다양한 기능을 갖춘 스마트 모니터, 작업과 여가에 적합합니다.', 4.6, 1850, 200, '모니터마스터', '디지털 미디어', TO_TIMESTAMP('2024-01-30 14:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-03-02 14:00:00', 'YYYY-MM-DD HH24:MI:SS'), 0);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('5584kp', '스마트 체온계', '정확한 체온 측정을 도와주는 스마트 체온계, 일상적인 건강 관리에 유용합니다.', 4.7, 1900, 210, '체온클리닉', '헬스케어', TO_TIMESTAMP('2024-03-15 12:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-04-15 12:00:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('5072zx', '프리미엄 키보드', '고급스러운 타건감과 디자인을 갖춘 프리미엄 키보드, 편안한 타이핑을 제공합니다.', 4.8, 2000, 230, '타이핑마스터', '디지털 미디어', TO_TIMESTAMP('2024-02-10 10:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-03-10 10:00:00', 'YYYY-MM-DD HH24:MI:SS'), 0);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('4829rq', '프리미엄 텀블러', '온도 유지와 세련된 디자인이 돋보이는 프리미엄 텀블러, 언제 어디서나 음료를 즐기세요.', 4.6, 1750, 190, '텀블러피플', '식품', TO_TIMESTAMP('2024-05-01 12:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-06-01 12:00:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('5098lw', '스마트 휴대용 선풍기', '간편하게 휴대할 수 있는 스마트 휴대용 선풍기, 더위에 대응할 수 있습니다.', 4.7, 1950, 210, '선풍기천사', '홈/리빙', TO_TIMESTAMP('2024-04-01 13:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-05-01 13:00:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('5142bn', '스마트 공기 청정기', '한층 더 깨끗한 공기를 위한 스마트 공기 청정기, 집안의 공기를 혁신적으로 변화시킵니다.', 4.6, 1950, 220, '맑은공기', '홈/리빙', TO_TIMESTAMP('2024-07-01 15:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-08-01 15:00:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('4976qt', '프리미엄 마사지 기기', '편안한 마사지를 제공하는 프리미엄 마사지 기기, 하루의 피로를 풀어줍니다.', 4.8, 2300, 250, '마사이케어', '헬스케어', TO_TIMESTAMP('2024-05-10 11:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-06-10 11:00:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('5109zc', '스마트 정수기', '편리한 물 관리와 효율적인 정수 기능을 자랑하는 스마트 정수기, 매일 신선한 물을 제공합니다.', 4.7, 2200, 240, '물깨끗', '홈/리빙', TO_TIMESTAMP('2024-06-15 12:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-07-15 12:00:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('5115xl', '스마트 식기세척기', '매일의 설거지를 간편하게 해결해주는 스마트 식기세척기, 효율적인 설거지로 시간을 절약하세요.', 4.6, 2000, 220, '세척마스터', '홈/리빙', TO_TIMESTAMP('2024-02-25 10:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-03-25 10:00:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('5224lk', '프리미엄 노트북 쿨러', '열을 효과적으로 식혀주는 프리미엄 노트북 쿨러, 컴퓨터의 성능을 지키세요.', 4.5, 1900, 210, '쿨링아이', '디지털 미디어', TO_TIMESTAMP('2024-03-10 12:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-04-10 12:00:00', 'YYYY-MM-DD HH24:MI:SS'), 0);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('5239qb', '스마트 화분', '자동 급수와 영양 공급 기능이 있는 스마트 화분, 식물을 건강하게 키우는 최적의 솔루션.', 4.7, 2050, 220, '그린스마트', '홈/리빙', TO_TIMESTAMP('2024-01-15 13:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-02-15 13:00:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('4896rz', '스마트 블루투스 이어폰', '완벽한 음질과 무선 자유를 제공하는 스마트 블루투스 이어폰, 일상의 음악을 더욱 즐겁게.', 4.8, 2100, 250, '음악파라다이스', '디지털 미디어', TO_TIMESTAMP('2024-06-05 14:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-07-05 14:00:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('4963mn', '프리미엄 카메라 렌즈', '탁월한 화질과 선명한 촬영을 지원하는 프리미엄 카메라 렌즈, 전문가의 선택.', 4.9, 2200, 270, '렌즈프로', '디지털 미디어', TO_TIMESTAMP('2024-07-20 11:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-08-20 11:00:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('4912wb', '스마트 알람 시계', '효율적인 시간 관리를 돕는 스마트 알람 시계, 다양한 알람 기능으로 더 나은 하루를 시작하세요.', 4.6, 1800, 200, '타임매니지먼트', '홈/리빙', TO_TIMESTAMP('2024-04-10 12:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-05-10 12:00:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('5152vc', '프리미엄 전동 칫솔', '효과적인 치아 세정을 위한 프리미엄 전동 칫솔, 매일의 구강 관리를 완벽하게 도와줍니다.', 4.7, 1950, 210, '치아건강', '헬스케어', TO_TIMESTAMP('2024-03-30 11:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-04-30 11:00:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('5431yd', '스마트 진공 청소기', '효율적인 청소를 도와주는 스마트 진공 청소기, 집안 구석구석 깨끗하게 청소해줍니다.', 4.6, 2000, 220, '청소매니아', '홈/리빙', TO_TIMESTAMP('2024-02-05 12:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-03-05 12:00:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('5298lp', '프리미엄 블루투스 헤드폰', '탁월한 사운드 품질과 편안한 착용감을 제공하는 프리미엄 블루투스 헤드폰, 음악을 새롭게 경험하세요.', 4.8, 2250, 260, '사운드퀸', '디지털 미디어', TO_TIMESTAMP('2024-06-20 14:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-07-20 14:00:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('5258hr', '프리미엄 가전 세트', '고급스러운 디자인과 뛰어난 성능을 자랑하는 프리미엄 가전 세트, 집안의 품격을 높여줍니다.', 4.7, 2200, 230, '가전프리미엄', '홈/리빙', TO_TIMESTAMP('2024-02-15 12:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-03-15 12:00:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('5864kj', '스마트 냄새 제거기', '강력한 냄새 제거 기능을 갖춘 스마트 냄새 제거기, 쾌적한 생활 환경을 만들어줍니다.', 4.6, 1750, 200, '향기지기', '홈/리빙', TO_TIMESTAMP('2024-03-05 11:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-04-05 11:00:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('5021zw', '스마트 손목 시계', '다양한 기능과 세련된 디자인을 자랑하는 스마트 손목 시계, 당신의 일상을 더욱 스마트하게.', 4.7, 1850, 210, '시계매니아', '디지털 미디어', TO_TIMESTAMP('2024-05-10 14:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-06-10 14:00:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('5176jt', '프리미엄 전자렌지', '정확한 온도 조절과 편리한 사용이 가능한 프리미엄 전자렌지, 조리 시간을 단축시켜줍니다.', 4.6, 1900, 230, '렌지왕', '홈/리빙', TO_TIMESTAMP('2024-04-20 13:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-05-20 13:00:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('5304sl', '스마트 블루투스 스피커', '탁월한 음질과 편리한 무선 연결을 제공하는 스마트 블루투스 스피커, 음악을 새롭게 즐기세요.', 4.8, 2000, 240, '사운드히어로', '디지털 미디어', TO_TIMESTAMP('2024-07-15 14:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-08-15 14:00:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('5410mr', '스마트 베이비 모니터', '우리 아기를 안전하게 지켜주는 스마트 베이비 모니터, 실시간 모니터링으로 걱정을 덜어줍니다.', 4.7, 1950, 220, '베이비케어', '홈/리빙', TO_TIMESTAMP('2024-06-10 13:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-07-10 13:00:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('5741qz', '스마트 온열기', '빠르게 따뜻함을 제공하는 스마트 온열기, 추운 날씨에도 포근한 온기를 유지하세요.', 4.6, 1800, 200, '온열매니아', '홈/리빙', TO_TIMESTAMP('2024-02-20 10:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-03-20 10:00:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('5890vl', '프리미엄 청소 로봇', '자동으로 집안을 청소해주는 프리미엄 청소 로봇, 더 효율적인 청소를 경험하세요.', 4.8, 2100, 240, '로봇청소기', '홈/리빙', TO_TIMESTAMP('2024-05-20 12:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-06-20 12:00:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('5402hp', '스마트 헬스 밴드', '건강 모니터링과 피트니스 추적을 지원하는 스마트 헬스 밴드, 보다 건강한 생활을 도와줍니다.', 4.7, 1950, 210, '헬스온', '헬스케어', TO_TIMESTAMP('2024-07-01 11:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-08-01 11:00:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('5210qw', '프리미엄 전자레인지', '고급스러운 디자인과 강력한 성능을 자랑하는 프리미엄 전자레인지, 간편한 조리의 시작입니다.', 4.5, 1750, 200, '레인지왕', '홈/리빙', TO_TIMESTAMP('2024-06-30 10:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-07-30 10:00:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('5607zp', '스마트 체중계', '몸 상태를 정확히 측정해주는 스마트 체중계, 건강 관리를 손쉽게 도와줍니다.', 4.6, 1900, 220, '몸짱케어', '헬스케어', TO_TIMESTAMP('2024-04-05 13:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-05-05 13:00:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('5320ck', '스마트 손세정기', '효율적인 손 세정을 지원하는 스마트 손세정기, 위생을 지키는 스마트한 선택.', 4.7, 2000, 230, '위생천사', '헬스케어', TO_TIMESTAMP('2024-03-25 14:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-04-25 14:00:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('5928jf', '빛나는 음향 스피커', '🎶 빛나는 음향 스피커로 완벽한 사운드를 경험하세요! 🌟 소중한 순간들을 특별하게 만들어드립니다.', 4.7, 2150, 265, '사운드천사', '디지털 미디어', TO_TIMESTAMP('2024-06-02 11:30:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-07-02 11:30:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('5406lk', '휴대용 커피 브루어', '🚀 휴대용 커피 브루어로 언제 어디서나 커피의 품격을 유지하세요! ☕ 바쁜 일상 속 커피 타임의 혁신.', 4.6, 1850, 240, '커피왕국', '커피', TO_TIMESTAMP('2024-07-12 13:45:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-08-12 13:45:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('5749tm', '모던 LED 조명', '🌟 집안 분위기를 새롭게! 💡 모던 LED 조명으로 스타일과 조명 모두 잡으세요.', 4.8, 2250, 250, '조명명가', '홈/리빙', TO_TIMESTAMP('2024-04-18 09:15:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-05-18 09:15:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('5856np', '럭셔리 식기 세트', '🎉 럭셔리 식기 세트로 식사시간을 더욱 특별하게! 🍽️ 우아함을 더해주는 완벽한 선택입니다.', 4.6, 2000, 215, '식기천국', '홈/리빙', TO_TIMESTAMP('2024-03-29 14:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-04-29 14:00:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('5932kd', '스마트 공기 청정기', '🌿 스마트 공기 청정기로 깨끗한 공기를 유지하세요! 💧 건강한 집안을 위한 필수 아이템입니다.', 4.7, 2100, 260, '가습왕', '홈/리빙', TO_TIMESTAMP('2024-05-02 15:30:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-06-02 15:30:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('5432rm', '커피 그라인더 프로', '🌟 커피 그라인더 프로로 신선한 원두를 직접 갈아보세요! ☕ 커피의 품격을 높여주는 필수 아이템입니다.', 4.8, 2200, 270, '커피명장', '커피', TO_TIMESTAMP('2024-07-16 11:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-08-16 11:00:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('5692pz', '스마트 온수 조절기', '🚿 스마트 온수 조절기로 적정 온도의 물을 언제든지! 💦 생활의 편리함을 더해주는 제품입니다.', 4.7, 1900, 235, '온수전문', '홈/리빙', TO_TIMESTAMP('2024-06-21 12:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-07-21 12:00:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('5119qw', '고급 헤어 드라이기', '💨 고급 헤어 드라이기로 매일매일 빠르고 스타일리시한 헤어스타일을 완성하세요! ✨', 4.6, 1850, 220, '헤어케어', '홈/리빙', TO_TIMESTAMP('2024-05-26 10:30:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-06-26 10:30:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('5239lj', '정밀 온도 측정기', '🌡️ 정밀 온도 측정기로 정확한 온도를 즉시 측정하세요! 🍳 요리의 완벽함을 보장해주는 필수 도구입니다.', 4.7, 2000, 245, '온도측정기', '홈/리빙', TO_TIMESTAMP('2024-07-02 13:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-08-02 13:00:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('5447mk', '스마트 오븐 시스템', '🍰 스마트 오븐 시스템으로 다양한 요리와 베이킹을 손쉽게! 🧁 주방의 혁신을 경험해보세요.', 4.8, 2100, 255, '오븐마스터', '홈/리빙', TO_TIMESTAMP('2024-08-06 14:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-09-06 14:00:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('5682vn', '스마트 전기 주전자', '🫖 스마트 전기 주전자로 빠르게 물을 끓이세요! 💨 일상 속의 작은 편리함을 더해주는 제품입니다.', 4.7, 1950, 225, '주전자마스터', '홈/리빙', TO_TIMESTAMP('2024-02-26 12:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-03-26 12:00:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('5723nd', '스마트 냉장 보관기', '🥶 스마트 냉장 보관기로 신선함을 오래 유지하세요! 🌟 최신 기술로 집안의 음식을 안전하게 보관합니다.', 4.8, 2150, 265, '냉장고명가', '홈/리빙', TO_TIMESTAMP('2024-03-16 13:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-04-16 13:00:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('5238kj', '스마트 식기 세트', '🍽️ 스마트 식기 세트로 매일의 식사를 스마트하게! 🎊 우아함과 실용성을 동시에 제공합니다.', 4.7, 2050, 240, '식기왕국', '홈/리빙', TO_TIMESTAMP('2024-04-10 10:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-05-10 10:00:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('5113nk', '포터블 블루투스 스피커', '🔊 포터블 블루투스 스피커로 어디서든 음악을 즐기세요! 🌈 휴대성과 성능을 모두 갖춘 완벽한 선택입니다.', 4.5, 1800, 230, '사운드전문', '디지털 미디어', TO_TIMESTAMP('2024-07-20 09:45:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-08-20 09:45:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('5598sm', '스마트 미니 프로젝터', '📽️ 스마트 미니 프로젝터로 집에서 영화관을 경험하세요! 🎬 작은 크기지만 큰 화질을 제공합니다.', 4.6, 1950, 220, '프로젝터마스터', '디지털 미디어', TO_TIMESTAMP('2024-08-09 14:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-09-09 14:00:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('5471tx', '프리미엄 홈 로봇 청소기', '🤖 프리미엄 홈 로봇 청소기로 집안 청소를 완벽하게! 🏠 자동 청소의 혁신을 경험하세요.', 4.8, 2250, 250, '청소전문', '홈/리빙', TO_TIMESTAMP('2024-06-15 12:30:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-07-15 12:30:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('5229lo', '에어 프라이어', '🍟 에어 프라이어로 건강하고 맛있는 음식을 간편하게! 🥗 기름 없이도 바삭한 요리를 즐기세요.', 4.7, 2000, 245, '프라이어마스터', '홈/리빙', TO_TIMESTAMP('2024-05-20 11:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-06-20 11:00:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('5695hr', '무선 충전기', '🔋 무선 충전기로 케이블 없이 편리하게 충전하세요! ⚡ 혁신적인 충전의 시작을 경험해보세요.', 4.6, 1750, 210, '충전전문', '디지털 미디어', TO_TIMESTAMP('2024-07-12 10:30:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-08-12 10:30:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('5249dp', '스마트 워치', '⌚ 스마트 워치로 건강과 시간을 스마트하게 관리하세요! 📈 최신 기술로 생활의 편리함을 더해줍니다.', 4.7, 1900, 230, '워치마스터', '디지털 미디어', TO_TIMESTAMP('2024-05-28 12:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-06-28 12:00:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('5468df', '인덕션 레인지', '🔥 인덕션 레인지로 빠르고 효율적인 요리를 즐기세요! 🍲 혁신적인 열전도 기술로 요리의 정점을 경험하세요.', 4.6, 1850, 220, '레인지왕', '홈/리빙', TO_TIMESTAMP('2024-04-14 13:30:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-05-14 13:30:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('5124tx', '액티브 헤드폰', '🎧 액티브 헤드폰으로 음향의 세계에 빠져보세요! 🔊 탁월한 음질과 편안한 착용감을 자랑합니다.', 4.8, 2100, 270, '헤드폰천국', '디지털 미디어', TO_TIMESTAMP('2024-06-10 09:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-07-10 09:00:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('5379xd', '스마트 전기 자전거', '🚴 스마트 전기 자전거로 새로운 라이딩 경험을! ⚡ 빠르고 편리한 이동을 지원합니다.', 4.7, 2000, 245, '자전거천국', '디지털 미디어', TO_TIMESTAMP('2024-05-05 14:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-06-05 14:00:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('5587cj', '스마트 홈 보안 시스템', '🔒 스마트 홈 보안 시스템으로 집안의 안전을 지키세요! 🏠 최신 보안 기술로 안심하세요.', 4.8, 2150, 255, '보안전문', '홈/리빙', TO_TIMESTAMP('2024-07-23 12:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-08-23 12:00:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('5712lk', '스마트 음성 비서', '🗣️ 스마트 음성 비서로 일상을 더욱 편리하게! 🎙️ 음성으로 모든 것을 제어하세요.', 4.6, 1950, 230, '음성비서', '디지털 미디어', TO_TIMESTAMP('2024-06-18 11:30:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-07-18 11:30:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('5278rm', '휴대용 미니 냉장고', '🥤 휴대용 미니 냉장고로 언제 어디서나 시원하게! 🌟 캠핑과 여행에 적합한 스마트한 선택.', 4.7, 1850, 225, '냉장고마스터', '홈/리빙', TO_TIMESTAMP('2024-08-01 10:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-09-01 10:00:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('5156kj', '스마트 로봇 청소기', '🤖 스마트 로봇 청소기로 손쉬운 청소를 경험하세요! 🧹 자동으로 깨끗한 집안을 만들어드립니다.', 4.7, 1950, 220, '청소명가', '홈/리빙', TO_TIMESTAMP('2024-03-22 09:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-04-22 09:00:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('5475pl', '스마트 커피 머신', '☕ 스마트 커피 머신으로 완벽한 커피를 집에서! 🌟 자동 추출과 맞춤형 설정으로 최고의 맛을 경험하세요.', 4.8, 2200, 260, '커피천사', '커피', TO_TIMESTAMP('2024-04-05 14:30:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-05-05 14:30:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('5648fj', '스마트 공기 청정기', '🌿 스마트 공기 청정기로 집안 공기를 상쾌하게! 🌟 건강한 생활을 위한 필수 아이템입니다.', 4.7, 1900, 225, '청정기마스터', '홈/리빙', TO_TIMESTAMP('2024-05-30 12:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-06-30 12:00:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('5119jw', '모던 디자인 램프', '💡 모던 디자인 램프로 집안 분위기를 새롭게! ✨ 세련된 디자인으로 공간을 밝히세요.', 4.6, 1800, 215, '디자인조명', '홈/리빙', TO_TIMESTAMP('2024-07-14 13:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-08-14 13:00:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('5728mh', '휴대용 정수기', '💧 휴대용 정수기로 어디서든 깨끗한 물을! 🌟 여행과 야외 활동에 최적화된 스마트한 선택입니다.', 4.7, 2000, 245, '정수기명가', '홈/리빙', TO_TIMESTAMP('2024-06-04 10:30:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-07-04 10:30:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('5317xp', '스마트 블루투스 이어폰', '🎧 스마트 블루투스 이어폰으로 무선 자유를 만끽하세요! 🎶 탁월한 음질과 편리한 기능을 제공합니다.', 4.8, 2100, 260, '이어폰천국', '디지털 미디어', TO_TIMESTAMP('2024-07-28 14:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-08-28 14:00:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('5520tj', '전기 고데기', '💇 전기 고데기로 매일매일 완벽한 스타일링을! ✨ 편리하고 빠르게 헤어를 정리할 수 있습니다.', 4.7, 1850, 220, '헤어케어전문', '홈/리빙', TO_TIMESTAMP('2024-06-13 10:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-07-13 10:00:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('5258mc', '스마트 인덕션', '🔥 스마트 인덕션으로 요리의 즐거움을 더하세요! 🍲 최신 기술로 빠르고 효율적인 조리가 가능합니다.', 4.8, 2200, 250, '인덕션명가', '홈/리빙', TO_TIMESTAMP('2024-07-14 11:30:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-08-14 11:30:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('5724pk', '다기능 블렌더', '🍹 다기능 블렌더로 다양한 요리를 간편하게! 🧃 블렌딩과 다지기의 완벽한 조합으로 요리의 폭을 넓히세요.', 4.6, 1900, 235, '블렌더마스터', '홈/리빙', TO_TIMESTAMP('2024-06-01 13:30:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-07-01 13:30:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('5312dl', '포터블 가습기', '🌫️ 포터블 가습기로 언제 어디서나 촉촉하게! 💧 이동이 편리한 디자인으로 일상에 편리함을 더합니다.', 4.7, 1950, 225, '가습기명가', '홈/리빙', TO_TIMESTAMP('2024-05-11 10:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-06-11 10:00:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('5459jp', '스마트 에어컨', '❄️ 스마트 에어컨으로 시원한 여름을 준비하세요! 🌟 최신 기술로 최적의 온도를 유지합니다.', 4.8, 2150, 260, '에어컨명가', '홈/리빙', TO_TIMESTAMP('2024-06-23 11:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-07-23 11:00:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('5398df', '스마트 전기 요리기', '🍳 스마트 전기 요리기로 빠르고 효율적인 요리를 즐기세요! ⚡ 자동 조리 기능으로 편리함을 더합니다.', 4.7, 2000, 245, '요리명가', '홈/리빙', TO_TIMESTAMP('2024-05-17 10:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-06-17 10:00:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('5271lp', '스마트 스피커', '🎵 스마트 스피커로 음악과 함께하는 생활을! 🌟 음성 명령으로 모든 기능을 간편하게 제어하세요.', 4.6, 1800, 210, '스피커명가', '디지털 미디어', TO_TIMESTAMP('2024-07-25 12:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-08-25 12:00:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
INSERT INTO projects (id, name, title, rate, likes, achive, author, category, upload, expiration, premium)
VALUES ('5345lh', '스마트 압력 밥솥', '🍚 스마트 압력 밥솥으로 맛있는 밥을 쉽게! 🌟 자동 조리 기능으로 다양한 밥 요리를 간편하게.', 4.7, 2000, 235, '밥솥명가', '홈/리빙', TO_TIMESTAMP('2024-06-21 11:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2024-07-21 11:00:00', 'YYYY-MM-DD HH24:MI:SS'), 1);
