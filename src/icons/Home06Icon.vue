
<template>
  <Icon :iconName="'home-06'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Home06Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'home-06'
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
