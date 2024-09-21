
<template>
  <Icon :iconName="'arrow-right-05'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ArrowRight05Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'arrow-right-05'
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
