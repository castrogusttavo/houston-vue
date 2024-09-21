
<template>
  <Icon :iconName="'call-incoming-04'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CallIncoming04Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'call-incoming-04'
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
