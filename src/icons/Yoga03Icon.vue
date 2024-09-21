
<template>
  <Icon :iconName="'yoga-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Yoga03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'yoga-03'
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
