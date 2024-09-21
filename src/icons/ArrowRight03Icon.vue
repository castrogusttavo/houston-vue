
<template>
  <Icon :iconName="'arrow-right-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ArrowRight03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'arrow-right-03'
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
