
<template>
  <Icon :iconName="'text-smallcaps'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TextSmallcapsIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'text-smallcaps'
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
