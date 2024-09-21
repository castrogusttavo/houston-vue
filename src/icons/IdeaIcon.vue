
<template>
  <Icon :iconName="'idea'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'IdeaIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'idea'
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
