
<template>
  <Icon :iconName="'home-07'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Home07Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'home-07'
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
