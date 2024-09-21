
<template>
  <Icon :iconName="'home-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Home01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'home-01'
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
