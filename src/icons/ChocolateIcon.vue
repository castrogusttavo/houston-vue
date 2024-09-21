
<template>
  <Icon :iconName="'chocolate'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ChocolateIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'chocolate'
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
