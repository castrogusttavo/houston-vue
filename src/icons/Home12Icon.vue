
<template>
  <Icon :iconName="'home-12'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Home12Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'home-12'
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
