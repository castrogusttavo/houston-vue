
<template>
  <Icon :iconName="'rainbow'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'RainbowIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'rainbow'
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
