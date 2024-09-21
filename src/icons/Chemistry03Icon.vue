
<template>
  <Icon :iconName="'chemistry-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Chemistry03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'chemistry-03'
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
