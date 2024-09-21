
<template>
  <Icon :iconName="'long-sleeve-shirt'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LongSleeveShirtIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'long-sleeve-shirt'
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
