
<template>
  <Icon :iconName="'ease-in'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'EaseInIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'ease-in'
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
