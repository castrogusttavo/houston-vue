
<template>
  <Icon :iconName="'repeat'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'RepeatIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'repeat'
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
