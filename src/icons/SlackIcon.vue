
<template>
  <Icon :iconName="'slack'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SlackIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'slack'
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
