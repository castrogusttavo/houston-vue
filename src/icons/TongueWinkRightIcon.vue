
<template>
  <Icon :iconName="'tongue-wink-right'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TongueWinkRightIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'tongue-wink-right'
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
