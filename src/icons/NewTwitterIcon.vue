
<template>
  <Icon :iconName="'new-twitter'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'NewTwitterIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'new-twitter'
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
