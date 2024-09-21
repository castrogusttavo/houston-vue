
<template>
  <Icon :iconName="'medal-07'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Medal07Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'medal-07'
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
