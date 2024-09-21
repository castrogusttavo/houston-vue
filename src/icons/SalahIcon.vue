
<template>
  <Icon :iconName="'salah'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SalahIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'salah'
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
