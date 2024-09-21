
<template>
  <Icon :iconName="'pan-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Pan03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'pan-03'
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
