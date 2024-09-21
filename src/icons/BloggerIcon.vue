
<template>
  <Icon :iconName="'blogger'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BloggerIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'blogger'
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
