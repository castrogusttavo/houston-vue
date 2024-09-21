
<template>
  <Icon :iconName="'tongue-wink-left'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TongueWinkLeftIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'tongue-wink-left'
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
