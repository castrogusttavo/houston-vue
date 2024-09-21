
<template>
  <Icon :iconName="'android'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AndroidIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'android'
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
