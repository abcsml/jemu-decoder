export default {
	mask: '-----------------001-----0000011',
	args: {
		imm: ['31:20'],
		rs1: ['19:15'],
		rd: ['11:7']
	},
	sext: true,
	exec: {
		$: 'rd = sext([rs1 + sext(imm, 12)], 16)'
	},
	meta: {
		encoding: 'I',
		importance: NaN
	}
}
