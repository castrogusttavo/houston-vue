
<template>
  <Icon :iconName="'4k'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FourKIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: '4k'
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
