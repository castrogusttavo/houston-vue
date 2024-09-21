
<template>
  <Icon :iconName="'barns'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BarnsIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'barns'
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
