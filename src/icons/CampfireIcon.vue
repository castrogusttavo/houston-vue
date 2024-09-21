
<template>
  <Icon :iconName="'campfire'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CampfireIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'campfire'
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
