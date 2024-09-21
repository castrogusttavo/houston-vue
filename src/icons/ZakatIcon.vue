
<template>
  <Icon :iconName="'zakat'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ZakatIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'zakat'
    },
    ...Icon.props
  },
  computed: {
    props() {
      return { ...this.$props };
    }
  }
};
</script>
