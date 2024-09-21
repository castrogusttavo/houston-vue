
<template>
  <Icon :iconName="'arrow-left-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ArrowLeft03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'arrow-left-03'
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
