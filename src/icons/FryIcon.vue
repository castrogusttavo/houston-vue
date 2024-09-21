
<template>
  <Icon :iconName="'fry'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FryIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'fry'
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
