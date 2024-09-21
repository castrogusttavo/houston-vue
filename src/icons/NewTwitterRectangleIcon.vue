
<template>
  <Icon :iconName="'new-twitter-rectangle'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'NewTwitterRectangleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'new-twitter-rectangle'
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
