
<template>
  <Icon :iconName="'stumbleupon'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'StumbleuponIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'stumbleupon'
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
