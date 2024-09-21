
<template>
  <Icon :iconName="'thumbs-up-down'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ThumbsUpDownIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'thumbs-up-down'
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
