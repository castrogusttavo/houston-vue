
<template>
  <Icon :iconName="'scheme'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SchemeIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'scheme'
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
