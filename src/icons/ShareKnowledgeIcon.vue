
<template>
  <Icon :iconName="'share-knowledge'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ShareKnowledgeIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'share-knowledge'
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
