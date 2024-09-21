
<template>
  <Icon :iconName="'snapchat'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SnapchatIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'snapchat'
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
