
<template>
  <Icon :iconName="'user-sharing'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'UserSharingIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'user-sharing'
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
