
<template>
  <Icon :iconName="'surprise'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SurpriseIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'surprise'
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
