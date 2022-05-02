export default {
	mask: '-----------------110-----1110011',
	args: {
		imm: ['19:15'],
		csr: ['31:15'],
		rd: ['11:7']
	},
	sext: true,
	exec: {
		$: '// var(t) = CSRs[csr]; CSRs[csr] |= ~imm[4:0]; rd = t'
	},
	meta: {
		encoding: 'I',
		importance: NaN
	}
}
