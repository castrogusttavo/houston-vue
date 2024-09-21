
<template>
  <Icon :iconName="'user-story'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'UserStoryIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'user-story'
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
